import app, { baseUrl } from 'init.testSetup';
import User, { ROLE } from 'models/User';
import supertest from 'supertest';

import { hashPassword } from 'helpers/hashPassword';

describe('POST /auth/sign-up', () => {
  describe('validation tests', () => {
    it('should respond successfully (1)', async () => {
      const body = {
        firstName: 'test_example',
        lastName: 'test_example',
        userName: 'test_example',
        role: 'ADMIN',
        email: 'test.example.example@email.com',
        phone: '9090909090',
        password: '123456789',
      };

      const response = await supertest(app).post(`${baseUrl}/auth/sign-up`).send(body);

      expect(response.status).toEqual(201);
    });

    it('should throw a validation error (1)', async () => {
      const body = {
        firstName: 909090,
        lastName: 'test_example',
        userName: 'test_example',
        role: 'ADMIN',
        email: 'test.example.example@email.com',
        phone: '9090909090',
        password: '123456789',
      };

      const response = await supertest(app).post(`${baseUrl}/auth/sign-up`).send(body);

      expect(response.status).toEqual(422);
    });
  });
});

describe('POST /auth/sign-in', () => {
  beforeEach(async () => {
    const initialData = {
      firstName: 'test_example',
      lastName: 'test_example',
      userName: 'test_example',
      role: ROLE.ADMIN,
      email: 'test.example.example@email.com',
      phone: '9090909090',
      password: '123456789',
    };

    await User.create({
      ...initialData,
      password: hashPassword(initialData.password),

    });
  });

  describe('validation tests', () => {
    it('should respond successfully (1)', async () => {
      const body = {
        email: 'test.example.example@email.com',
        password: '123456789',
      };

      const response = await supertest(app).post(`${baseUrl}/auth/sign-in`).send(body);

      expect(response.status).toEqual(200);
    });

    it('should throw a validation error (1)', async () => {
      const body = {
        email: 9090909090,
        password: '123456789',
      };

      const response = await supertest(app).post(`${baseUrl}/auth/sign-in`).send(body);

      expect(response.status).toEqual(422);
    });
  });
});
