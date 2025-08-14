import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-background relative">
      <Header />
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        {children}
      </main>
    </div>
  );
}