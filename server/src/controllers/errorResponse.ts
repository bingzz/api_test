import { NextFunction, Request, Response } from 'express';
import { SuccessResponse } from '../models/successResponse';

export function errorResponse(req: Request, res: Response, next: NextFunction) {
  console.log('Error Response.');

  res.status(400);
  throw new Error('Error Response');
}

export default errorResponse;