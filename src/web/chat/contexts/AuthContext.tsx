import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getAuthToken, setAuthToken } from '../../hooks/useAuth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  userEmail: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthToken());
  const [userEmail, setUserEmail] = useState<string | null>(
    localStorage.getItem('user-email')
  );

  const login = (email: string) => {
    // TODO: Implement actual authentication logic
    // For now, we'll simulate successful login by setting a mock token
    const mockToken = 'a'.repeat(32); // Mock 32-character hex token
    setAuthToken(mockToken);
    localStorage.setItem('user-email', email);
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear auth token cookie
    document.cookie = 'cui-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    localStorage.removeItem('user-email');
    setUserEmail(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}