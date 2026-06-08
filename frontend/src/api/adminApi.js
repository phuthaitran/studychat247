/**
 * adminApi.js — Wrappers for admin-only endpoints.
 *
 * All components should call these functions rather than reaching into
 * axiosInstance directly.
 */
import axiosInstance from './axiosInstance';

/**
 * Trigger a full knowledgebase re-ingestion.
 * Calls GET /api/admin/ingest and returns the backend message string.
 * This can take several minutes — ensure the caller handles the long wait.
 *
 * @returns {Promise<string>} Completion message from the backend.
 */
export const triggerIngestion = async () => {
  const { data } = await axiosInstance.get('/admin/ingest');
  return data.message;
};
