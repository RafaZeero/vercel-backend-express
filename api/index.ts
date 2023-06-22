import express from 'express';
import type { Express, Request, Response } from 'express';

const PORT = 3000;
const app = express() as Express;

app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
