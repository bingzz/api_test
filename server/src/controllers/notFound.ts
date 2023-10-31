import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../models/error";

function notFound(req: Request, res: Response, next: NextFunction) {
  const name = 'API Route not found';
  const message = 'API call does not exist.';

  const error = new Error(message) as Error & { name: string; };
  error.name = name;

  const jsonObj: ErrorResponse = {
    code: 404,
    message: message,
    name: name
  };

  console.error(message);
  return res.status(404).json(jsonObj);
}

export default notFound;