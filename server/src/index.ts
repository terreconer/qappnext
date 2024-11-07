import express from 'express';
import exampleRoute from './routes/StartRoute';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/api', exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
