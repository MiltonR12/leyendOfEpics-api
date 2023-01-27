import express from "express";
import { PORT } from "./config.js";
import routerTorneo from './routes/torneo.routes.js';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routerTorneo)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})