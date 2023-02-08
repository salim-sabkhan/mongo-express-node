import cors from "cors";
import express from "express";
 import { MongoClient } from "mongodb";
 import  dotenv from 'dotenv';
import { getAllMovies, getMovieById, deleteMovieById, addMovies } from "./helper.js";
import { moviesRouter } from "./Routes/movies.js";
import { userRouter } from "./Routes/user.js";
import bcrypt from "bcrypt";



dotenv.config()
// console.log(process.env.MONGO_URL)

const app = express();
app.use(cors())
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

   async function createConnection () {
   const client = new MongoClient(MONGO_URL)
   await client.connect();
   console.log("Mongo is Connected");
   return client;
   } 
  
   export const client = await createConnection();

     app.use(express.json());
  

// Rest API Endpoints

app.get("/",(request,response) => {
    response.send("Hello Everyone 🥰😘😊")
})

// Specify movie Router

app.use("/movies", moviesRouter)

app.use("/user", userRouter)

// Create a server

app.listen(PORT, () => console.log("Server started on port",PORT));


