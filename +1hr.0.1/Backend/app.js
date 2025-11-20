import express from 'express';
import corse from 'cors';
import cookiesparser from 'cookie-parser';



const app = express();
app.use(corse());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookiesparser());


export default app;