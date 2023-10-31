import { Request, Response, NextFunction } from "express";

function authHandler(req: Request, res: Response, next: NextFunction) {
  console.log('====================\nAuthenticating...');
  let authenticated = true;

  // Query from Database here

  if (!authenticated) {
    const name = 'Unauthenticated';
    const message = 'User is unauthenticated.';

    const error = new Error(message) as Error & { name: string; };
    error.name = name;

    res.status(403);
    next(error);
    return;
  }

  next();
}

export default authHandler;