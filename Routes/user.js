import express from "express";
import {genPassword, createUser, getUserByName} from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
  
  //   Method - to insert all data
  
  router.post("/signup", async(request, response) =>  {
    const {username, password} = request.body;
    console.log(username, password);
    // db.movies.insertMany(movies);
   const userFromDB = await getUserByName(username)
   console.log(userFromDB)
  //  is username exist
  if(!userFromDB){
    response.status(400).send({message : "Invalid Credentials"})
    return;
  }
  const storedPassword = userFromDB.password

  const isPasswordMatch = await bcrypt.compare(password, storedPassword)
  if(!isPasswordMatch){
    response.status(400).send({message : "Invalid Credentials"})
    return;
  }
});

//Login 

router.post("/login", async (request, response) =>  {  
  const { username, password } = request.body;
  console.log(username, password);
  //db.movies.insertMany(movies) 
const userFromDB = await getUserByName(username)
console.log(userFromDB);
//username already exist
if  (!userFromDB ) {
  response.status(400).send({ message: "Invalid credentials" });
  return;   
}
const storedPassword = userFromDB.password;

  const isPasswordMatch = await bcrypt.compare(password, storedPassword)
  if  (!isPasswordMatch ) {
    response.status(400).send({ message: "Invalid credentials" });
    return;   
  }
  //issue token 
  const token = jwt.sign({ id: userFromDB._id}, process.env.SECRET_KEY);
  response.send({ message: "Successful login", token: token });
  });

  



  export const userRouter = router;

  