/* eslint-disable max-len */
import { sign } from 'jsonwebtoken';

export const createAccessToken = (id: string, sessionId: string) => sign({ id, sessionId }, process.env.ACCESS_TOKEN_SECRET_KEY as string, {
  expiresIn: process.env.TOKEN_EXPIRES_IN,
});

export const createRefreshToken = (id: string, sessionId: string) => sign({ id, sessionId }, process.env.REFRESH_TOKEN_SECRET_KEY as string);
