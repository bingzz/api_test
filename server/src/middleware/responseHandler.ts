import { Request, Response, NextFunction } from "express";

function responseHandler(req: Request, res: Response, next: NextFunction) {
  console.log('Response logged.');

  // Log Activity Here

  next();
}

export default responseHandler;