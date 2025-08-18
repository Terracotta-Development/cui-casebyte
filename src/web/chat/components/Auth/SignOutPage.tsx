import React, { useState } from 'react';
import { Button } from '@/web/chat/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { providerMap, Provider } from '@/web/types/auth';

const SignOutPage = () => {
  const { signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);

    try {
      const signedOut: boolean = await signOut();
      if (!signedOut) {
        setError('Sign out failed');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Sign out failed');
      console.error("Sign out failed:", err)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Sign Out</h1>
        </div>
        {Object.values(providerMap).map((provider: Provider) => (
        <form onSubmit={handleSubmit} className="space-y-4" key={provider.id}>
          <div className="space-y-2 text-center italic">
            Are you sure you want to sign out from CaseByte?
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12"
            disabled={isLoading}
          >
            {isLoading ? 'Signing out...' : 'Sign Out'}
          </Button>
        </form>
        ))}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default SignOutPage;