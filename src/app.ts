import express from 'express';

import cors from 'cors';
import Routes from './routes';

import swaggerUI from 'swagger-ui-express';
import full_documentation from './documentation/full_documentation.json';

import apiErrorHandler from './helpers/apiErrorHandler';
import { apiLogger } from './helpers/logger';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Middleware to logs api request
app.use(apiLogger);

// Routes
app.use(Routes);
app.use('/public', express.static('public/'));

app.get('/', (req: express.Request, res: express.Response) => {
  return res.status(200).send({ message: 'HelloWorld' });
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(full_documentation));
/*
 * Keep error-handler as last middleware
 */
app.use(apiErrorHandler);

export default app;
