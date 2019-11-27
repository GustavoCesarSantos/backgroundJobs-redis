import express from 'express';
import BullBoard from 'bull-board';

import 'dotenv/config';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
app.use(express.json());

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use('/admin/queues', BullBoard.UI);
app.post('/users', UserController.store)

app.listen(7777, console.log('Server running on: 7777'));