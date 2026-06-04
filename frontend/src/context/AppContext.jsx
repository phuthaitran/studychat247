import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser, refreshToken } from "../api/authApi";
import { getSessions, getSession, deleteSession as deleteSessionApi } from "../api/chatApi";
import tokenStore from "../api/tokenStore";

const AppContext = createContext();

// ── Topbar defaults ───────────────────────────────────────────────────────────
const DEFAULT_SUBJECT = 'math';
const DEFAULT_GRADE = 10;

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    // ── Auth state ────────────────────────────────────────────────────────────
    const [user, setUser] = useState(null);          // User object from /api/user/me
    const [accessToken, setAccessToken] = useState(null);

    // Loading flag: true while we're checking auth state on startup.
    // Prevents a flash-redirect to /login before we know if the user is logged in.
    const [authLoading, setAuthLoading] = useState(true);

    // ── Session list state (sidebar) ──────────────────────────────────────────
    // List of SessionResponse objects from GET /api/chat/sessions
    const [sessions, setSessions] = useState([]);

    // ── Active session state ──────────────────────────────────────────────────
    // UUID string of the currently open session, or null for a new / empty chat
    const [currentSessionId, setCurrentSessionId] = useState(null);

    // Full SessionMessageResponse (id, title, subject, grade, messages[]) for
    // the open session. null when no session is selected.
    const [currentSession, setCurrentSession] = useState(null);

    // True while GET /api/chat/sessions/:id is in-flight
    const [sessionLoading, setSessionLoading] = useState(false);

    // ── Topbar selection (free-pick for new chats) ────────────────────────────
    // When a session is active these are irrelevant — sessionSubject/Grade are
    // read from currentSession instead. When starting a new chat these are the
    // values the user has selected in the Topbar dropdowns.
    const [topbarSubject, setTopbarSubject] = useState(DEFAULT_SUBJECT);
    const [topbarGrade, setTopbarGrade] = useState(DEFAULT_GRADE);

    // ── Derived: locked subject/grade for the active session ──────────────────
    // Convenience getters: returns the session's subject/grade when a session is
    // open, otherwise the current Topbar selection.
    const sessionSubject = currentSession?.subject ?? null;
    const sessionGrade = currentSession?.grade ?? null;

    // ── Helpers ───────────────────────────────────────────────────────────────

    /**
     * Persist a new access token in both React state and the tokenStore singleton
     * (which the Axios interceptor reads). Always call this after a successful
     * login or token refresh.
     */
    const storeToken = useCallback((token) => {
        tokenStore.token = token;
        setAccessToken(token);
    }, []);

    /**
     * Clear all auth and chat state (called on logout or when refresh fails).
     */
    const clearAuth = useCallback(() => {
        tokenStore.token = null;
        setAccessToken(null);
        setUser(null);
        setSessions([]);
        setCurrentSessionId(null);
        setCurrentSession(null);
        setTopbarSubject(DEFAULT_SUBJECT);
        setTopbarGrade(DEFAULT_GRADE);
    }, []);

    /**
     * Fetch the current user's profile from the API.
     * Expects a valid access token to already be in tokenStore.
     */
    const fetchUser = useCallback(async () => {
        try {
            const userData = await getCurrentUser();
            setUser(userData);
            return userData;
        } catch {
            clearAuth();
            return null;
        }
    }, [clearAuth]);

    /**
     * Full logout: call the API, clear all state, go to /login.
     */
    const logout = useCallback(async () => {
        try {
            await logoutUser();
        } catch {
            // Even if the API call fails, clear client state
        } finally {
            clearAuth();
            navigate('/login');
        }
    }, [clearAuth, navigate]);

    // ── Chat helpers ──────────────────────────────────────────────────────────

    /**
     * Load (or reload) the sidebar session list from the API.
     * Called on login and after creating/deleting sessions.
     */
    const fetchSessions = useCallback(async () => {
        try {
            const data = await getSessions();
            setSessions(data);
        } catch {
            // Silently ignore — user stays on the current session
        }
    }, []);

    /**
     * Open a session: fetch its messages, lock subject/grade, scroll to bottom.
     * Sets sessionLoading = true while in-flight so ChatBox can show a spinner.
     */
    const selectSession = useCallback(async (sessionId) => {
        setSessionLoading(true);
        setCurrentSession(null);
        setCurrentSessionId(sessionId);
        try {
            const data = await getSession(sessionId);
            setCurrentSession(data);
        } catch {
            // If the fetch fails reset to empty state
            setCurrentSessionId(null);
        } finally {
            setSessionLoading(false);
        }
    }, []);

    /**
     * Reset to a blank new-chat state:
     * - Clear the active session
     * - Reset Topbar dropdowns to defaults
     */
    const startNewChat = useCallback(() => {
        setCurrentSessionId(null);
        setCurrentSession(null);
        setTopbarSubject(DEFAULT_SUBJECT);
        setTopbarGrade(DEFAULT_GRADE);
    }, []);

    /**
     * Delete a session by ID.
     * - Removes it from the sidebar list.
     * - If it was the active session, resets to empty-chat state.
     */
    const removeSession = useCallback(async (sessionId) => {
        await deleteSessionApi(sessionId);
        setSessions((prev) => prev.filter((s) => s.id !== sessionId));
        if (currentSessionId === sessionId) {
            startNewChat();
        }
    }, [currentSessionId, startNewChat]);

    // ── Startup: try to restore session from the refresh token cookie ─────────
    useEffect(() => {
        const initAuth = async () => {
            try {
                // The browser automatically sends the httpOnly refresh_token cookie.
                // If it's still valid, we get a fresh access token back.
                const { access_token } = await refreshToken();
                storeToken(access_token);
                await fetchUser();
            } catch {
                // No valid refresh token → user is not logged in; that's fine.
                clearAuth();
            } finally {
                setAuthLoading(false);
            }
        };

        initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run once on mount only

    // ── Fetch sessions when user logs in ──────────────────────────────────────
    useEffect(() => {
        if (user) {
            fetchSessions();
        } else {
            setSessions([]);
            setCurrentSessionId(null);
            setCurrentSession(null);
        }
    }, [user, fetchSessions]);

    // ── Context value ─────────────────────────────────────────────────────────
    const value = {
        // Auth
        user,
        setUser,
        accessToken,
        storeToken,
        fetchUser,
        logout,
        authLoading,

        // Session list (sidebar)
        sessions,
        setSessions,
        fetchSessions,

        // Active session
        currentSessionId,
        setCurrentSessionId,
        currentSession,
        setCurrentSession,
        sessionLoading,
        selectSession,
        startNewChat,
        removeSession,

        // Derived subject/grade for the active session (null = no active session)
        sessionSubject,
        sessionGrade,

        // Topbar free-pick (used only when currentSession === null)
        topbarSubject,
        setTopbarSubject,
        topbarGrade,
        setTopbarGrade,

        // Navigation
        navigate,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);