import React, { useState } from 'react';
import { Button } from '@/web/chat/components/ui/button';
import { Input } from '@/web/chat/components/ui/input';
import { useAuthContext } from '../../contexts/AuthContext';

interface LoginPageProps {
  onSwitchToSignup: () => void;
  onBack: () => void;
}

export function LoginPage({ onSwitchToSignup, onBack }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    try {
      // TODO: Implement actual login logic with backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      login(email);
      onBack(); // Navigate back to main page after successful login
    } catch (error) {
      console.error('Login failed:', error);
      // TODO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-muted-foreground">Enter your email to sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              autoFocus
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12"
            disabled={!email.trim() || isLoading}
          >
            {isLoading ? 'Signing in...' : 'Continue'}
          </Button>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="font-medium text-foreground hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={onBack}
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}