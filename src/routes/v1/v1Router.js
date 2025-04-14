import express from 'express';

import channelRouter from './channel.js';
import userRouter from './users.js'; // Import the user router
import workspaceRuter from './workspaces.js';

const router = express.Router();

router.use('/users', userRouter); // Use the user router for all routes starting with /users

router.use('/workspaces', workspaceRuter); // Use the workspace router for all routes starting with /workspaces

router.use('/channels', channelRouter);

export default router;
