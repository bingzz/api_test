import express from 'express';

import { success } from '../controllers/successResponse';
import errorResponse from '../controllers/errorResponse';

const router = express.Router();

router.use('/success', success);
router.use('/error', errorResponse);

export default router;