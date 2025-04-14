import express from 'express';

import { isAuthenticated } from '../../middlewares/authmiddleware.js';
import { getChannelbyIdController } from '../../controllers/channelcontroller.js';

const router = express.Router();

router.get('/:channelId', isAuthenticated, getChannelbyIdController);

export default router;