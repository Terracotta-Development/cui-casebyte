import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { ConversationView } from './components/ConversationView/ConversationView';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import { ConversationsProvider } from './contexts/ConversationsContext';
import { StreamStatusProvider } from './contexts/StreamStatusContext';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css';

function ChatApp() {
  return (
    <AuthProvider>
      <PreferencesProvider>
        <StreamStatusProvider>
          <ConversationsProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
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