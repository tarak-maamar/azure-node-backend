/* eslint-disable linebreak-style */
import { compareSync } from 'bcrypt';

import { IMiddleware } from 'types/IMiddleware';

export const checkAuthentication: IMiddleware = async (req, res, next) => {
  const { password } = req.body;
  const { password: userPassword } = (res.locals.selectedUser);

  try {
    //TODO: Add a provider verification Step
    //TODO: Add a User Status Verification Function

    if (!compareSync(password, userPassword)) {
      throw Error('Incorrect Password');
    }

    next();
  } catch (error) {
    res.status(500).send({ message: error.message, stack: error.stack });
  }
};
