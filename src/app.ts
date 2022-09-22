import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './docs/swagger';
import { router } from './v1/routes';
import db from './config/mongo';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
app.use(
  '/api/v1/documentation',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSetup)
);

db().then(() => {
  console.log('Conecction succefully');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
