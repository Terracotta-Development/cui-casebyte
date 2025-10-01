import { usePostHog } from 'posthog-js/react';
import { useAuth } from '../../hooks/useAuth';

export const usePostHogTracking = () => {
  const posthog = usePostHog();
  const { user } = useAuth();
  
  const trackConversation = (prompt: string, sessionId: string) => {    
    const eventData = {
      prompt,
      user_email: user?.email,
      session_id: sessionId,
      conversation_url: `${window.location.origin}/c/${sessionId}`,
    };
    
    if (posthog) {
      posthog.capture('ask_button_clicked', eventData);
    } else {
    }
  };
  
  return { trackConversation };
};