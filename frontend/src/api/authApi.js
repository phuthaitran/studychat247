/**
 * authApi.js — Clean wrappers around all auth & user endpoints.
 *
 * All components and context should call these functions rather than
 * reaching into axiosInstance directly, so endpoint URLs stay in one place.
 */
import axiosInstance from './axiosInstance';

/**
 * Login.
 * NOTE: FastAPI's OAuth2PasswordRequestForm requires application/x-www-form-urlencoded
 * and uses the field name "username" — we pass the user's email as that value.
 */
export const loginUser = async (email, password) => {
  const params = new URLSearchParams();
  params.append('username', email); // OAuth2 field name; backend treats it as email
  params.append('password', password);

  const { data } = await axiosInstance.post('/auth/login', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return data; // { access_token, token_type }
};

/**
 * Register.
 * Backend defaults new accounts to the "user" role automatically.
 */
export const registerUser = async (username, email, password) => {
  const { data } = await axiosInstance.post('/auth/register', {
    username,
    email,
    password,
    role: 'user', // Explicit, though backend defaults to this
  });
  return data;
};

/**
 * Refresh the access token.
 * The httpOnly refresh_token cookie is sent automatically (withCredentials).
 */
export const refreshToken = async () => {
  const { data } = await axiosInstance.post('/auth/refresh');
  return data; // { access_token, token_type }
};

/**
 * Logout — backend deletes the DB refresh token record and clears the cookie.
 */
export const logoutUser = async () => {
  await axiosInstance.post('/auth/logout');
};

/**
 * Get the currently authenticated user (requires valid access token).
 */
export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get('/user/me');
  return data;
};
