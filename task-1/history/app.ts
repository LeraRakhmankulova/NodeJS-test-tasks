import express, { Express, Request, Response } from 'express';
import { errors } from 'celebrate';
import historyRouter from './routes/history';

const app: Express = express();

app.use(express.json());

app.use('/history', historyRouter);


app.listen(3001, () => {
  console.log('History service running on port 3001');
});
