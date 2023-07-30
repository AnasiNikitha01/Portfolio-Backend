import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { Connection } from './Connection/Connection.js';
import Messages from './Routes/Message_route.js';

const app = express();   
      
app.use(express.json());  
   
app.use(cors({origin:'https://portfolio-frontend-plum.vercel.app',credentials:true}));
   
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-frontend-plum.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });         


configDotenv();   

app.use(Messages);         

const port = process.env.PORT || 5001;

Connection();

app.listen(port,()=>{
    console.log(`App running on ${port}`);
})