/* eslint-disable linebreak-style */
import * as UserController from 'controllers/userController';
import { Router } from 'express';
import * as UserMiddleware from 'middlewares/user';
import * as UserValidator from 'validators/user';

const router = Router();
const BASE_ROUTE = '/user';

router.post(
  `${BASE_ROUTE}/sign-up`,
  UserValidator.signUp,
  UserValidator.checkIfCoordinatesExists,
  UserController.signUp,
);

router.post(
  `${BASE_ROUTE}/sign-in`,
  UserValidator.signIn,
  UserMiddleware.findAuthByEmail,
  UserMiddleware.checkAuthentication,
  UserController.signIn,
);

export default router;
