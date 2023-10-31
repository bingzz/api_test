import { NextFunction, Request, Response } from 'express';
import { SuccessResponse } from '../models/successResponse';

export function success(req: Request, res: Response, next: NextFunction) {
  console.log('Success Response.');

  const jsonObj: SuccessResponse = {
    code: 200,
    data: []
  };

  res.json(jsonObj);
}