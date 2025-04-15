import express from 'express';

import { getChannelbyIdController } from '../../controllers/channelcontroller.js';
import { isAuthenticated } from '../../middlewares/authmiddleware.js';

const router = express.Router();

router.get('/:channelId', isAuthenticated, getChannelbyIdController);

export default router;
