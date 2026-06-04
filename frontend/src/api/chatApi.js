import axiosInstance from './axiosInstance';

/**
 * Fetch all chat sessions for the current user,
 * ordered by most recently updated (desc).
 *
 * @returns {Promise<SessionResponse[]>}
 */
export const getSessions = async () => {
  const { data } = await axiosInstance.get('/chat/sessions');
  return data;
};

/**
 * Fetch a single session with its full message history.
 *
 * @param {string} sessionId - UUID of the session
 * @returns {Promise<SessionMessageResponse>}
 */
export const getSession = async (sessionId) => {
  const { data } = await axiosInstance.get(`/chat/sessions/${sessionId}`);
  return data;
};

/**
 * Permanently delete a session and all its messages.
 *
 * @param {string} sessionId - UUID of the session to delete
 * @returns {Promise<void>}
 */
export const deleteSession = async (sessionId) => {
  await axiosInstance.delete(`/chat/sessions/${sessionId}`);
};

/**
 * Send a message and receive the AI assistant's reply.
 *
 * @param {object} payload
 * @param {string|null} payload.session_id   - Existing session UUID, or null for the first message
 * @param {string}      payload.message      - The user's message text
 * @param {string}      payload.subject      - Subject slug (e.g. "math")
 * @param {number}      payload.grade        - Grade level (10, 11, or 12)
 * @returns {Promise<AskResponse>}
 */
export const askQuestion = async ({ session_id, message, subject, grade }) => {
  const { data } = await axiosInstance.post('/chat/ask', {
    session_id,
    message,
    subject,
    grade,
  });
  return data;
};
