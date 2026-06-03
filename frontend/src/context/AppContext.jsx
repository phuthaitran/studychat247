import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser, refreshToken } from "../api/authApi";
import tokenStore from "../api/tokenStore";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    // ── Auth state ────────────────────────────────────────────────────────────
    const [user, setUser] = useState(null);          // User object from /api/user/me
    const [accessToken, setAccessToken] = useState(null);

    // Loading flag: true while we're checking auth state on startup.
    // Prevents a flash-redirect to /login before we know if the user is logged in.
    const [authLoading, setAuthLoading] = useState(true);

    // ── Chat state ────────────────────────────────────────────────────────────
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);

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
     * Clear all auth state (called on logout or when refresh fails).
     */
    const clearAuth = useCallback(() => {
        tokenStore.token = null;
        setAccessToken(null);
        setUser(null);
        setChats([]);
        setSelectedChat(null);
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

    // ── Chat side effects ─────────────────────────────────────────────────────
    useEffect(() => {
        if (!user) {
            setChats([]);
            setSelectedChat(null);
        }
        // TODO: fetch real chats when chat API is ready
    }, [user]);

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

        // Chat
        chats,
        setChats,
        selectedChat,
        setSelectedChat,

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