import React, { useState } from 'react';
import { Button } from '@/web/chat/components/ui/button';
import { Input } from '@/web/chat/components/ui/input';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuthContext();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);

    try {
      // TODO: Implement actual signup logic with backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      await signup(email);
      navigate('/');
    } catch (err) {
      setError('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-muted-foreground">Enter your email to get started for free</p>
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
            {isLoading ? 'Creating account...' : 'Continue'}
          </Button>
        </form>
        {error && <div className="error">{error}</div>}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-foreground hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;