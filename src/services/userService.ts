import User from 'models/User';
import * as TokenService from 'services/tokenService';
import { v4 as uuidv4 } from 'uuid';

import { hashPassword } from 'helpers/hashPassword';

export const signUp = async (
  userData: User,
) => {
  const {
    firstName, lastName, userName, role, email, phone, password,
  } = userData;

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      userName,
      role,
      email,
      password: hashPassword(password),
      phone,
    });

    return newUser;
  } catch (error) {
    throw new Error('Error creating a new User !', error);
  }
};

export const signIn = async (
  user: {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  },
) => constructSignedInUserObject(user);

export const constructSignedInUserObject = async (
  user: {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  },
) => {
  const { refreshToken, sessionId } = await createRefreshToken(user);

  const accessToken = TokenService.createAccessToken(user.id, sessionId);

  return { user, token: { refreshToken, accessToken } };
};

export const createRefreshToken = async (user: {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string
}) => {
  const sessionId = uuidv4();

  const refreshToken = TokenService.createRefreshToken(user.id, sessionId);

  //TODO: Add User session support maybe
  // user.sessions.push({ refreshToken, identifier: sessionId });
  // await user.save();

  return { refreshToken, sessionId };
};
