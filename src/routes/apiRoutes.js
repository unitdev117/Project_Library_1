import express from 'express';

import v1Router from './v1/v1Router.js'; // Import the v1 router

const router = express.Router();

router.use('/v1', v1Router); // Use the v1 router for all routes starting with /v1;

export default router;
