"use server"
import dotenv from 'dotenv'
import { ExpressAuth } from "@auth/express"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Resend from "@auth/express/providers/resend"

dotenv.config()

if (!process.env.AUTH_SECRET) throw new Error('AUTH_SECRET is required')
if (!process.env.SUPABASE_URL) throw new Error('SUPABASE_URL is required')
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY is required')
if (!process.env.AUTH_RESEND_KEY) throw new Error('AUTH_RESEND_KEY is required')

const providers = [
  Resend({
    apiKey: process.env.AUTH_RESEND_KEY,
    from: "auth@casebyte.ai"
  })
];
export const authConfig = {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: providers,
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      // In development, ensure users are always redirected to frontend (port 3000)
      if (process.env.NODE_ENV === 'development') {
        const frontendUrl = 'http://localhost:3000'; // update if using a different port.

        // If it's a relative URL, prepend the frontend URL
        if (url.startsWith('/')) {
          return `${frontendUrl}${url}`;
        }
        
        // If it's already pointing to the frontend, use it as-is
        if (url.startsWith(frontendUrl)) {
          return url;
        }
        
        // For any other URL, redirect to frontend home
        return frontendUrl;
      }
      
      // Production behavior - use default Auth.js logic
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  }
}

export interface Provider {
  id: string;    // Provider id
  name: string;  // Provider name
  // ...other possible provider properties
}

export type ProviderMap = Array<Provider>;

export const providerMap: ProviderMap = providers
  .map((provider) => ({ id: provider.id, name: provider.name }))
  .filter((provider) => provider.id !== "credentials");

// Export the configured ExpressAuth for use in routes
export const expressAuth = ExpressAuth(authConfig)