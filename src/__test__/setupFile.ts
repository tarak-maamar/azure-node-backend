import {
  clearMockDB,
  closeMockDB,
  connectToMockDB,
} from './utils/memoryServer/utils';

beforeAll(async () => {
  connectToMockDB();
});
afterEach(async () => {
  await clearMockDB();
});

afterAll(async () => {
  await closeMockDB();
});
