import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

/**
 * ProtectedRoute
 *
 * Wraps a route element and enforces authentication + role-based access.
 *
 * Props:
 *  - children      The page component to render if allowed.
 *  - requiredRole  'user' | 'admin' | undefined (undefined = any authenticated user)
 */
const ProtectedRoute = ({ children, requiredRole }) => {
    const { user, authLoading } = useAppContext();

    if (authLoading) {
        // Show the logo loading screen while we check auth state on startup.
        // This prevents a flash-redirect to /login before we know the session status.
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: '20px',
                background: '#faf9f7',
            }}>
                <img
                    src="/logo-with-text.svg"
                    alt="StudyChat247"
                    style={{ width: '220px' }}
                />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#82735a',
                    fontSize: '14px',
                    fontWeight: '500',
                }}>
                    <span className="auth-spinner" />
                    Loading...
                </div>
            </div>
        );
    }

    // Not logged in → go to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Role check: the API (UserPublic schema) serialises roles as a flat
    // string array e.g. ["admin"] or ["user"] — NOT a nested object array.
    const userRoles = user.roles ?? [];

    if (requiredRole === 'admin' && !userRoles.includes('admin')) {
        // Regular user trying to access admin → send to home
        return <Navigate to="/" replace />;
    }

    if (requiredRole === 'user' && userRoles.includes('admin')) {
        // Admin trying to access user page → send to admin panel
        return <Navigate to="/admin" replace />;
    }

    return children;
};

export default ProtectedRoute;
