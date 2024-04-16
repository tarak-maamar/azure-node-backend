/* eslint-disable linebreak-style */
import { check, validationResult } from 'express-validator';
import User from 'models/User';

import { IMiddleware } from 'types/IMiddleware';

export const signUp: IMiddleware = async (req, res, next) => {
  await check('email', 'Wrong format, correct: example@email.org !').isEmail().run(req);
  await check('email', 'Email must be a string !').isString().run(req);
  await check('email', 'Email is required !').exists().run(req);

  await check('password', 'Password should have at least 8 characters').isLength({ min: 8 }).run(req);
  await check('password', 'Password must be a string').isString().run(req);
  await check('password', 'Password is required').exists().run(req);

  await check('firstName', 'First name should be at least 4 characters').isLength({ min: 4 }).run(req);
  await check('firstName', 'First name must be a string').isString().run(req);
  await check('firstName', 'First name is required').exists().run(req);

  await check('lastName', 'Last name should have at least 4 characters').isLength({ min: 4 }).run(req);
  await check('lastName', 'Last name must be a string').isString().run(req);
  await check('lastName', 'Last name is required').exists().run(req);

  await check('phone', 'Wrong format, Should be a valid phone number !').isMobilePhone('any').run(req);
  await check('phone', 'Phone number must be a string').isString().run(req);
  await check('phone', 'Phone number is required').exists().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).send({ message: 'Data Validation Error !', errors: errors.array() });

    return;
  }
  next();
};

export const checkIfCoordinatesExists: IMiddleware = async (
  req,
  res,
  next,
) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    res.status(422).send({ message: 'email address already in Use !' });

    return;
  }
  next();
};

export const signIn: IMiddleware = async (req, res, next) => {
  await check('email', 'Wrong format, correct: example@email.org !').isEmail().run(req);
  await check('email', 'Email must be a string !').isString().run(req);
  await check('email', 'Email is required !').exists().run(req);

  await check('password', 'Password should have at least 8 characters').isLength({ min: 8 }).run(req);
  await check('password', 'Password must be a string').isString().run(req);
  await check('password', 'Password is required').exists().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).send({ message: 'Missing required information', errors: errors.array() });

    return;
  }
  next();
};

export default signIn;
