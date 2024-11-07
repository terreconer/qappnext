import { Router } from 'express';
import { getExample } from '../controllers/StartController';

const router = Router();
router.get('/example', getExample);

export default router;
