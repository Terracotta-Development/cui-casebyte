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
    return session?.user ? session : null;
  } catch (error) {
    console.error('Failed to get session:', error);
    return null;
  }
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

  /**
   * Sign out user by calling Auth.js signout API directly
   */
  async function signOut(): Promise<boolean> {
    setLoading(true);
    try {
      const response = await fetch('/auth/signout', {
        method: 'POST',
      });
      console.log("SIGN OUT RESPONSE: ",response); // TODO: remove once debugged
      if (!response.ok) {
        console.error("Error in signing out");
        return false;
      }
    } catch(error) {
      console.error("Error in signing out:", error);
      return false;
    } finally {
      setLoading(false);
    }
    return true;
  }

  /**
   * Sign in user by calling Auth.js signin API directly
   */
  async function signIn(providerId: string, email: string): Promise<Response> {
    const sanitizedEmail = email.trim();

    const endpointUrl = '/auth/signin/'+providerId;

    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: sanitizedEmail,
        redirect: false,
      }),
    });

    return response;
  }

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