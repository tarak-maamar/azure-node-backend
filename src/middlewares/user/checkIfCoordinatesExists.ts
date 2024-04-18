import User from 'models/User';
import { Op } from 'sequelize';

import { IMiddleware } from 'types/IMiddleware';

export const checkIfCoordinatesExists: IMiddleware = async (
  req,
  res,
  next,
) => {
  const { email, phone, userName } = req.body;
  const user = await User.findOne({ where: { [Op.or]: [{ email }, { phone }, { userName }] } });

  if (!user) {
    next();

    return;
  }

  if (user.email === email) {
    res.status(422).send({ message: 'Email address already in Use !' });
  }

  if (user.phone === phone) {
    res.status(422).send({ message: 'Phone number already in Use !' });
  }

  if (user.userName === userName) {
    res.status(422).send({ message: 'Username already in Use !' });
  }
};
