import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
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
  const theme = useTheme();

  const getThemeIcon = () => {
    switch (theme.colorScheme) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      case 'system':
        return <Monitor size={18} />;
      default:
        return <Sun size={18} />;
    }
  };

  const getThemeLabel = () => {
    switch (theme.colorScheme) {
      case 'light':
        return 'Light theme';
      case 'dark':
        return 'Dark theme';
      case 'system':
        return 'System theme';
      default:
        return 'Toggle theme';
    }
  };

  const getNextThemeLabel = () => {
    switch (theme.colorScheme) {
      case 'light':
        return 'Switch to dark theme';
      case 'dark':
        return 'Switch to system theme';
      case 'system':
        return 'Switch to light theme';
      default:
        return 'Toggle theme';
    }
  };

  if (showLabel) {
    return (
      <Button
        variant={variant}
        size={size}
        onClick={theme.toggle}
        className={className}
        aria-label={getNextThemeLabel()}
      >
        {getThemeIcon()}
        <span className="ml-2">{getThemeLabel()}</span>
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
            onClick={theme.toggle}
            className={className}
            aria-label={getNextThemeLabel()}
          >
            {getThemeIcon()}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getNextThemeLabel()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
