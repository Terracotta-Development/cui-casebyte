import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { ConversationView } from './components/ConversationView/ConversationView';
import LoginPage from './components/Auth/LoginPage';
import SignOutPage from './components/Auth/SignOutPage';
import { ConversationsProvider } from './contexts/ConversationsContext';
import { StreamStatusProvider } from './contexts/StreamStatusContext';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css';
import { useAuth } from '../hooks/useAuth';
import { Button } from './components/ui/button';
import LandingPage from '@/web/landing/LandingPage';

// Unauthenticated component with login button
function UnauthenticatedScreen() {
  const navigate = useNavigate();
  return (
    <div style={{ 
      position: 'relative',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem'
    }}>
      {/* Theme toggler in top-right corner, CURRENTLY NOT AUTHENTICATED TO USE */}
      {/* <div style={{ 
        position: 'absolute', 
        top: '2rem', 
        right: '2rem' 
      }}>
        <ThemeToggler variant="outline" size="sm" />
      </div> */}
      
      <h1 className="text-2xl">Welcome to Casebyte</h1>
      <p>Please sign in to continue</p>
      <Button 
        onClick={() => navigate('/signin')} 
        variant="default"
        size="lg"
      >
        Sign In with Email
      </Button>
    </div>
  );
}

// Loading component
function LoadingScreen() {
  return (
    <div style={{ 
      position: 'relative',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      
      <div>Loading...</div>
      <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>
        Checking authentication status
      </div>
    </div>
  );
}

function ChatApp() {
  const { loading, isAuthenticated } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  const MyRoutes = () => {
    return (
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <UnauthenticatedScreen />
            )
          }
        />
        <Route
          path="/c/:sessionId"
          element={
            isAuthenticated ? (
              <Layout>
                <ConversationView />
              </Layout>
            ) : (
              <UnauthenticatedScreen />
            )
          }
        />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <UnauthenticatedScreen />
            )
          }
        />
      </Routes>
    )
  };

  return (
    <AuthProvider>
      <PreferencesProvider>
        <StreamStatusProvider>
          <ConversationsProvider>
            {/* <MyRoutes /> */}
            < LandingPage />
          </ConversationsProvider>
        </StreamStatusProvider>
      </PreferencesProvider>
    </AuthProvider>
  );
}

export default ChatApp;