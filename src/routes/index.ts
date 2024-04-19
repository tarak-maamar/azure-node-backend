import { Router } from 'express';
import userRoutes from 'routes/users';

const router = Router();

router.use([userRoutes]);

export default router;
