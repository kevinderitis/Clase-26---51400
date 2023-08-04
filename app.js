import express from 'express';
import config from './src/config/config.js';
import userRouter from './src/routes/users.js';
import toyRouter from './src/routes/toys.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user', userRouter);
app.use('/api/toy', toyRouter)

const PORT = config.port || 8081;
const server = app.listen(PORT, () => console.log(`Server running on port: ${server.address().port}`))