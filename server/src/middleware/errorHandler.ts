import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../models/error";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('Error logged.');

  const errorCodeStatus = res.statusCode || 500;
  const errorName = err.name || 'Internal Server Error.';
  const errorMsg = err.message || 'Server Error!';

  const jsonObj: ErrorResponse = {
    code: errorCodeStatus,
    message: errorMsg,
    name: errorName
  };

  return res.status(errorCodeStatus).json(jsonObj);
}

export default errorHandler;