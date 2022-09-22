import { Request, Response, NextFunction } from 'express';

const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export { logMiddleware };
