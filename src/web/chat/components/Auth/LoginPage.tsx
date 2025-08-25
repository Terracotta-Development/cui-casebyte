import React, { useState } from 'react';
import { Button } from '@/web/chat/components/ui/button';
import { Input } from '@/web/chat/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/web/hooks/useAuth';
import { providerMap, Provider } from '@/web/types/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, session, loading } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async ( providerId: string) => {
    if (!email.trim()) return;
    setIsLoading(true);
    setError('');
    try {
      await signIn(providerId, email);
      setSuccess(true);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to send magic link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">You are already signed in</h1>
        <Button 
          size="lg"
          variant="default"
          onClick={() => navigate('/')}
          className="mt-4"
        >
          Go to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">{success ? 'Please check your email' : 'Sign in'}</h1>
          <p className="text-muted-foreground">
            {success 
              ? <>
                We've sent a login link to {email}. <br />
                Please check your spam folder if you do not see an email from us.
                </>
              : 'Enter your email to sign in to your account'
            }
          </p>
        </div>

        {!success && Object.values(providerMap).map((provider: Provider) => (
          <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(provider.id)
            }} 
            className="space-y-4" 
            key={provider.id}
          >
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
              {isLoading ? 'Sending magic link...' : 'Continue'}
            </Button>
          </form>
        ))}

      {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;