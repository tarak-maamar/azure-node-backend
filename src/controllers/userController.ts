/* eslint-disable linebreak-style */

import { IMiddleware } from 'types/IMiddleware';

import * as UserService from '../services/userService';

export const signUp: IMiddleware = async (req, res) => {
  try {
    const newUser = await UserService.signUp(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message, stack: error.stack });
  }
};

export const signIn: IMiddleware = async (req, res) => {
  const { selectedUser } = res.locals;

  try {
    const user = await UserService.signIn(selectedUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: error.message, stack: error.stack });
  }
};
