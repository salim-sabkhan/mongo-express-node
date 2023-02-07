import { client } from "./index.js";

export async function getAllMovies(request) {
  return await client.db("test").collection("movies").find(request.query).toArray();
}
export async function getMovieById(id) {
  return await client.db("test").collection("movies").findOne({ id: id });
}
export async function deleteMovieById(id) {
  return await client.db("test").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
  return await client.db("test").collection("movies").insertMany(newMovies);
}