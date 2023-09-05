import express from "express";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import booksRoute from './Routes/booksRoute.js';
import cors from "cors";
const PORT = 5000;

const app = express();
//body parser
app.use(express.json());
//allow all origin
app.use(cors());
//allow Custom ORIGINS
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Contenet-Type'],
}))
//home route
app.get('/', (req, res)=>{
   res.send("nigga u trippin"); 
});
app.use('/books', booksRoute)
mongoose.connect(mongoDBURL)
        .then(()=>{
            console.log('App connected to db');
            app.listen(PORT, ()=>{
                console.log(`server listening on ${PORT}`);
            });
        })

        .catch((e)=>{
            console.log(e);
        });
       