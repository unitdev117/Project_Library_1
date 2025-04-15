import express from 'express';
import { StatusCodes } from 'http-status-codes';

import bullServerAdapter from './config/bullBoardConfig.js';
import connectDB from './config/dbConfig.js';
//import mailer from './config/mailConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
  //Testing purpose
  // const mailResponse = await mailer.sendMail({
  //   from : 'algocourse9@gmail.com',
  //   to : 'algocourse9@gmail.com',
  //   subject : 'Test mail',
  //   text : 'Welcome to the application'

  // });
  // console.log(mailResponse);

  app.use('/ui', bullServerAdapter.getRouter());
});
