import express from 'express';

//import { get } from 'mongoose';
import {
  createWorkspaceController,
  deleteWorkspaceController,
  getWorkspaceUserIsMemberofController,
  getWorkspaceController,
} from '../../controllers/workspaceController.js';
import { isAuthenticated } from '../../middlewares/authmiddleware.js';
import { createWorkspaceSchema } from '../../validators/workspaceSchema.js';
import { validate } from '../../validators/zodValidators.js';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  validate(createWorkspaceSchema),
  createWorkspaceController
);

router.get('/', isAuthenticated, getWorkspaceUserIsMemberofController);

router.delete('/:workspaceId', isAuthenticated, deleteWorkspaceController);

router.get('/:workspaceId', isAuthenticated, getWorkspaceController);

export default router;
