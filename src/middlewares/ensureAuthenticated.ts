import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  //Receber token
  const authToken= request.headers.authorization;
  //validar se token esta preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  const[, token]= authToken.split(" ")
  
  //validar se token é valido
  try {
   const {sub} = verify(token,"6fa18a0ac995377c6582912a7524018c") as IPayload;       
   //recuperar informações do usuário
   request.user_id = sub;
   console.log(sub);
   return next();
  } catch (err) {
    return response.status(401).end();
  }  
}