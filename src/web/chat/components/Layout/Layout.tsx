import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth();

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-background relative">
      {/* Header with user info and logout */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <h1 className="text-lg font-semibold">CUI - Common Agent UI</h1>
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm text-gray-600">
              Welcome, {user.email}
            </span>
          )}
          <button
            onClick={signOut}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded border"
          >
            Sign Out
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        {children}
      </main>
    </div>
  );
}