/**
 * userApi.js — Wrappers for user-management endpoints.
 *
 * Used exclusively by the Admin page. All components should call these
 * functions rather than reaching into axiosInstance directly.
 */
import axiosInstance from './axiosInstance';

/**
 *  Create user (admin page)
 *  This is to split user register (done by users) with user create (done by admins)
 */  
export const createUser = async (username, email, password, confirm_password, role = 'user') => {
  const { data } = await axiosInstance.post('/user', {
    username,
    email,
    password,
    confirm_password,
    role,
  });
  return data;
};
/**
 * Get all users (admin only).
 * Returns list of UserPrivate objects: { id, username, email, roles }.
 */
export const getUsers = async () => {
  const { data } = await axiosInstance.get('/user/users');
  return data;
};

/**
 * Update a user's username, email, and/or role.
 * @param {number} userId
 * @param {{ username?: string, email?: string, role?: string }} updates
 */
export const updateUser = async (userId, updates) => {
  const { data } = await axiosInstance.patch(`/user/${userId}`, updates);
  return data;
};

/**
 * Delete a user by ID.
 * @param {number} userId
 */
export const deleteUser = async (userId) => {
  await axiosInstance.delete(`/user/${userId}`);
};
