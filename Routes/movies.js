import express from "express";
import { getAllMovies, getMovieById, deleteMovieById, addMovies } from "../helper.js";

const router = express.Router();

// Task - get movies
router.get("/movies", async(request, response) =>  {
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }

    console.log(request.query);
    const movie = await getAllMovies(request);
     response.send(movie);
 });

router.get("/movies/:id", async(request,response) => {
    const {id} = request.params
    console.log(id);
    const movie = await getMovieById(id)
  
    console.log(movie);
  
    movie ? response.send(movie) : response.status(404).send({message :  "No Movie Found"});
  
  });
  
  // Delete One
  
  router.delete("/movies/:id", async(request,response) => {
    const {id} = request.params
    console.log(id);
    const movie = await deleteMovieById(id)
    response.send(movie)
  });
  
  //  POST Method - to insert all data
  
  router.post("/movies", async(request, response) =>  {
    const newMovies = request.body;
    console.log(newMovies);
    // db.movies.insertMany(movies);
    // console.log(request.query);
    const result = await addMovies(newMovies);
     response.send(result);
  });

   export const movieRouter = router;