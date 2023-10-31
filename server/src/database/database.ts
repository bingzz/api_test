import mongoose, { connect, ConnectOptions } from 'mongoose';
import { URI } from '..';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

function connectDatabase() {
  connect(URI!, connectOptions as ConnectOptions)
    .then(() => {
      console.log('Database Connected');

    })
    .catch((error) => {
      console.error('Failed to connect to Database:', (error as Error).message);
    });
}

export default connectDatabase;