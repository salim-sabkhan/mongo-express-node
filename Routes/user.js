import express from "express";
import {addMovies} from "../helper.js";

const router = express.Router();
  
  //   Method - to insert all data
  
  router.post("/signup", async(request, response) =>  {
    const newMovies = request.body;
    console.log(newMovies);
    // db.movies.insertMany(movies);
    // console.log(request.query);
    const result = await addMovies(newMovies);
     response.send(result);
  });

  export const userRouter = router;