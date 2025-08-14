import { expressAuth } from '@/auth'
import express from 'express'

export function createAuthRoutes() {
    const router = express.Router()
    
    // Add the auth middleware to handle all /auth/* routes
    router.use('/', expressAuth)

    return router
}