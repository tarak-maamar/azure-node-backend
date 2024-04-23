import app from './app';
import router from './routes';

const baseUrl = '/api/v1';

app.use(baseUrl, router);

export { baseUrl };

export default app;
