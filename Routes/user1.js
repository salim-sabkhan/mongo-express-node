import express from "express";
import {genPassword, createUser, getUserByName} from "../helper.js";

const router = express.Router();
  
  //   Method - to insert all data
  
  router.post("/signup", async(request, response) =>  {
    const {username, password} = request.body;
    console.log(username, password);
    // db.movies.insertMany(movies);
   const isUserExist = await getUserByName(username)
   console.log(isUserExist)
  //  is username exist
  if(isUserExist){
    response.status(400).send({message : "Username Already Exist"})
    return;
  }
  if( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password) )
   {response.status(400).send({ message: "Password pattern does not match"})
   return;}
     const hashedPassword= await genPassword(password);
     const result = await createUser(username, hashedPassword)
     response.send(result);
  });

  export const userRouter = router;

  //  step
 //Validate username is already present 
 //Validate if password matches (and check criteria like does it match the pattern )


 //store the user details - users collection - username & password 