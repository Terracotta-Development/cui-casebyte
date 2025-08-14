import { ExpressAuth } from "@auth/express"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Resend from "@auth/express/providers/resend"

export const authConfig = {
  providers: [
    Resend({
      from: "auth@casebyte.ai"
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  // Optional: add other configuration like callbacks, pages, 
etc.
}

// Export the configured ExpressAuth for use in routes
export const expressAuth = ExpressAuth(authConfig)