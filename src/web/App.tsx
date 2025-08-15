import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InspectorApp from './inspector/InspectorApp';
import ChatApp from './chat/ChatApp';
import { useAuth } from './hooks/useAuth';

// Loading component
function LoadingScreen() {
  return (
    <div style={{ 
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

// Unauthenticated component with login button
function UnauthenticatedScreen() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem'
    }}>
      <h1>Welcome to CUI</h1>
      <p>Please sign in to continue</p>
      <button 
        onClick={() => window.location.href = '/auth/signin'}
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

function App() {
  const { session, loading, isAuthenticated } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <UnauthenticatedScreen />;
  }

  // User is authenticated, show the app
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/*" element={<ChatApp />} />
        <Route path="/inspector" element={<InspectorApp />} />
      </Routes>
    </Router>
  );
}

export default App;