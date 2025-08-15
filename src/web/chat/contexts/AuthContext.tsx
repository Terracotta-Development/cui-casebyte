import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  signup: (email: string) => Promise<void>;
  logout: () => void;
  userEmail: string | null;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedEmail = localStorage.getItem('authUser');
    if (storedToken) setToken(storedToken);
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  const login = useCallback(async (email: string) => {
    console.log("LOGGING IN");
    // Replace with real API call
    const fakeToken = 'token_' + email;
    setToken(fakeToken);
    setUserEmail(email);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', fakeToken);
    localStorage.setItem('authUser', email);
  }, []);

  const signup = useCallback(async (email: string) => {
    // Replace with real API call
    const fakeToken = 'token_' + email;
    setToken(fakeToken);
    setUserEmail(email);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', fakeToken);
    localStorage.setItem('authUser', email);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserEmail(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout, userEmail, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}