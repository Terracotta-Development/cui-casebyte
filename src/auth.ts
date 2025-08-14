import dotenv from 'dotenv'
import { ExpressAuth } from "@auth/express"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Resend from "@auth/express/providers/resend"

dotenv.config()

if (!process.env.AUTH_SECRET) throw new Error('AUTH_SECRET is required')
if (!process.env.SUPABASE_URL) throw new Error('SUPABASE_URL is required')
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY is required')
if (!process.env.AUTH_RESEND_KEY) throw new Error('AUTH_RESEND_KEY is required')

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "auth@casebyte.ai"
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
}

// Export the configured ExpressAuth for use in routes
export const expressAuth = ExpressAuth(authConfig)