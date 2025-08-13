import React, { useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { PreferencesModal } from '../PreferencesModal/PreferencesModal';
import { Button } from '@/web/chat/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/web/chat/components/ui/tooltip';
import { LoginPage, SignupPage } from '../Auth';
import { useAuthContext } from '../../contexts/AuthContext';

export function Header() {
  const theme = useTheme();
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'signup'>('home');
  const { isAuthenticated, logout, userEmail } = useAuthContext();
  
  const handleLogin = () => {
    setCurrentView('login');
  };

  const handleSignup = () => {
    setCurrentView('signup');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleLogout = () => {
    logout();
    setCurrentView('home');
  };

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center justify-between p-3 h-[60px] bg-background font-semibold">
        <div className="relative flex items-center justify-between w-full px-1 py-3">
          {/* Navigation */}
          <nav className="flex items-center gap-2 ml-auto">
            {!isAuthenticated ? (
            <TooltipProvider>
              <Tooltip>
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-2xl hover:bg-muted/50"
                  aria-label="Log In"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 rounded-2xl hover:bg-muted/50"
                  aria-label="Sign Up"
                  onClick={handleSignup}
                >
                  Sign up for free
                </Button>
              </Tooltip>
            </TooltipProvider>         
            ) : (
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-2xl bg-muted/50 text-sm">
                        <User size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{userEmail}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Logged in as {userEmail}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative w-[30px] h-[30px] rounded-full hover:bg-muted/50"
                        aria-label="Log Out"
                        onClick={handleLogout}
                      >
                        <LogOut size={18} className="text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Log Out</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}