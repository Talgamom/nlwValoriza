import "reflect-metadata";
import express, {Request, Response, NextFunction  } from "express";
import "./database";
import "express-async-errors";
import {router} from "./routes";
import cors from "cors";

const app = express();
const porta = 3000;

app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
  if (err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status:"error",
    message: "Internal Server Error",
  })
})

app.listen(porta, ()=>console.log("Server rodando na porta "+porta));
