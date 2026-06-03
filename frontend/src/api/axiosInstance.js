import axios from 'axios';
import tokenStore from './tokenStore';

const axiosInstance = axios.create({
  // Requests to /api/* are proxied to http://localhost:8000 by Vite in dev
  baseURL: '/api',
  withCredentials: true, // Sends the httpOnly refresh_token cookie automatically
});

// ── Request interceptor ───────────────────────────────────────────────────────
// Attach the access token to every outgoing request if we have one.
axiosInstance.interceptors.request.use((config) => {
  if (tokenStore.token) {
    config.headers['Authorization'] = `Bearer ${tokenStore.token}`;
  }
  return config;
});

// ── Response interceptor ──────────────────────────────────────────────────────
// On 401, silently refresh the access token and retry the original request once.
// This keeps all callers clean — they never need to handle token expiry themselves.
let isRefreshing = false;
let failedQueue = []; // Requests that arrived while a refresh was already in flight

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only attempt a refresh for 401s that haven't already been retried,
    // and not for the refresh endpoint itself (avoid infinite loops).
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/refresh') &&
      !originalRequest.url?.includes('/auth/login')
    ) {
      if (isRefreshing) {
        // Queue subsequent 401s while a refresh is already in flight
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call refresh — cookie is sent automatically (withCredentials: true)
        const { data } = await axiosInstance.post('/auth/refresh');
        const newToken = data.access_token;

        tokenStore.token = newToken;
        processQueue(null, newToken);

        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh failed (expired / revoked) — clear token and let callers handle
        tokenStore.token = null;
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
