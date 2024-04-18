import User from 'models/User';

import { IMiddleware } from 'types/IMiddleware';

export const findAuthByEmail: IMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    res.status(404).send('No User found for this email !');

    return;
  }
  res.locals.selectedUser = user;
  next();
};
