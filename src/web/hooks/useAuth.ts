import { useEffect, useState } from 'react';

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
}

export interface AuthSession {
  user: AuthUser;
  expires: string;
}

/**
 * Get current Auth.js session from server
 */
export async function getSession(): Promise<AuthSession | null> {
  try {
    const response = await fetch('/auth/session', {
      credentials: 'include' // Include cookies for session
    });
    
    if (!response.ok) {
      return null;
    }
    
    const session = await response.json();
    return session.user ? session : null;
  } catch (error) {
    console.error('Failed to get session:', error);
    return null;
  }
}

/**
 * Sign out user by redirecting to Auth.js signout
 */
export function signOut(): void {
  window.location.href = '/auth/signout';
}

/**
 * Sign in user by redirecting to Auth.js signin
 */
export function signIn(): void {
  window.location.href = '/auth/signin';
}

/**
 * Hook for handling Auth.js session management
 */
export function useAuth() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentSession = await getSession();
        setSession(currentSession);
      } catch (error) {
        console.error('Auth check failed:', error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return {
    session,
    loading,
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    signIn,
    signOut
  };
}

// Legacy function for API compatibility - will be removed
export function getAuthToken(): string | null {
  // Return null to force API calls to use session-based auth
  return null;
}