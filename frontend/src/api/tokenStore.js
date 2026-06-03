/**
 * tokenStore — a plain module-level singleton.
 *
 * The Axios interceptor cannot read React state directly, so AppContext writes
 * the current access token here after every login / token refresh. The Axios
 * request interceptor then reads `tokenStore.token` to attach the Bearer header.
 *
 * This avoids circular imports between axiosInstance ↔ AppContext.
 */
const tokenStore = {
  token: null,
};

export default tokenStore;
