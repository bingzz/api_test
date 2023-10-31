import { Request, Response, NextFunction } from "express";
import { currentDate } from "../config/dateTime";

function responseHandler(req: Request, res: Response, next: NextFunction) {

  const jsonObj = {
    date: currentDate
  };

  // Log Activity Here
  console.log('Response logged:', jsonObj);

  next();
}

export default responseHandler;