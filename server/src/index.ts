import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import responseHandler from './middleware/responseHandler';
import errorHandler from './middleware/errorHandler';
import authHandler from './middleware/authHandler';
import router from './routes/routes';
import notFound from './controllers/notFound';

dotenv.config();

export const { URI, DBPORT } = process.env;

// .env URI is required (temporarily disabled for testing)
// if (!URI) {
//   console.error('No URI defined.');
//   process.exit(1);
// }

const app = express();
const port = DBPORT || 5000;

// Configs
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Authentication
app.use(authHandler);
app.use(responseHandler);

// Routes
app.use('/api', router);

// Handlers
app.use(errorHandler);
app.use('*', notFound);

// Listeners
app.listen(port, () => {
  console.log('Server listening:', port);
});