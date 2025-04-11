import express from 'express'

import userRouter from './users.js' // Import the user router

const router = express.Router()

router.use('/users', userRouter) // Use the user router for all routes starting with /users

export default router
