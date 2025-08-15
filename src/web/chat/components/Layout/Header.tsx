import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { User, LogOut } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '@/web/chat/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/web/chat/components/ui/tooltip';
import { useAuth } from '../../../hooks/useAuth';

const Header = () => {
  const { user, signOut, signIn } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

	const handleLogin = () => {
		signIn();
		navigate('/login');
  };

  const handleSignup = () => {
		signIn();
		navigate('/signup');
  };

  const handleLogout = () => {
		signOut();
		navigate('/'); 
  };

  return (
		<header className="sticky top-0 z-20 flex items-center justify-between p-3 h-[60px] bg-background font-semibold">
			<h1 className="text-lg font-semibold">CaseByte</h1>
			<div className="relative flex items-center justify-between w-full px-1 py-3">
				<nav className="flex items-center gap-2 ml-auto">
					{!user ? (
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
											<span className="text-muted-foreground">Welcome, {user.email}</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{user.email}</p>
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
  );
};

export default Header;
