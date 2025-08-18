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
import { ThemeToggler } from './components/ThemeToggler';

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
      {/* Theme toggler in top-right corner */}
      {/* <div style={{ 
        position: 'absolute', 
        top: '2rem', 
        right: '2rem' 
      }}>
        <ThemeToggler variant="outline" size="sm" />
      </div> */}
      
      <h1>Welcome to CUI</h1>
      <p>Please sign in to continue</p>
      <button 
        onClick={() => navigate('/signin')} // or signIn()
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }}
      >
        Sign In with Email
      </button>
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
      {/* Theme toggler in top-right corner
      <div style={{ 
        position: 'absolute', 
        top: '2rem', 
        right: '2rem' 
      }}>
        <ThemeToggler variant="outline" size="sm" />
      </div> */}
      
      <div>Loading...</div>
      <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>
        Checking authentication status
      </div>
    </div>
  );
}

function ChatApp() {
  const { session, loading, isAuthenticated } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/" element={<UnauthenticatedScreen />} />
        <Route path="/*" element={<UnauthenticatedScreen />} />
      </Routes>
    );
  }

  return (
    <AuthProvider>
      <PreferencesProvider>
        <StreamStatusProvider>
          <ConversationsProvider>
            <Routes>
              <Route path="/signout" element={<SignOutPage />} /> 
              <Route path="/" element={
                <Layout>
                  <Home />
                </Layout>
              } />
              <Route path="/c/:sessionId" element={
                <Layout>
                  <ConversationView />
                </Layout>
              } />
            </Routes>
          </ConversationsProvider>
        </StreamStatusProvider>
      </PreferencesProvider>
    </AuthProvider>
  );
}

export default ChatApp;