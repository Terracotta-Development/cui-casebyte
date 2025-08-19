import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { usePreferencesContext } from '../../contexts/PreferencesContext';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface ThemeTogglerProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggler({ 
  variant = 'ghost', 
  size = 'icon', 
  className = '',
  showLabel = false 
}: ThemeTogglerProps) {
  const { theme, updatePreferences } = usePreferencesContext();
  
  const toggleTheme = async () => {
    const nextTheme = theme.mode === 'light' ? 'dark' : 'light';
    await updatePreferences({ colorScheme: nextTheme });
  };

  const getThemeLabel = () => {
    return theme.mode === 'light' ? 'Light theme' : 'Dark theme';
  };

  const getNextThemeLabel = () => {
    return theme.mode === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
  };

  if (showLabel) {
    return (
      <Button
        variant={variant}
        size={size}
        onClick={toggleTheme}
        className={`${className} relative overflow-hidden`}
        aria-label={getNextThemeLabel()}
      >
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-6 rounded-full bg-muted">
            <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
              theme.mode === 'light' 
                ? 'left-1 bg-foreground' 
                : 'left-7 bg-foreground'
            }`} />
            <Sun className="absolute left-1.5 top-1 w-3.5 h-3.5" />
            <Moon className="absolute right-1.5 top-1 w-3.5 h-3.5" />
          </div>
          <span>{getThemeLabel()}</span>
        </div>
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            onClick={toggleTheme}
            className={`${className} relative overflow-hidden w-12 h-6 p-0`}
            aria-label={getNextThemeLabel()}
          >
            <div className="relative w-full h-full rounded-full bg-muted flex items-center justify-between px-1">
              <div className="relative">
              {theme.mode === 'light' && (
                <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 bg-foreground z-0"
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                }}
                />
              )}
              <Sun className="w-4 h-4 text-yellow-500 relative z-10" />
              </div>
              <div className="relative">
              {theme.mode === 'dark' && (
                <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 bg-foreground z-0"
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                }}
                />
              )}
              <Moon className="w-4 h-4 text-blue-500 relative z-10" />
              </div>
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getNextThemeLabel()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
