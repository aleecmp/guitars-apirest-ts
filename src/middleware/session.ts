import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401).send('INVALID_TOKEN');
    } else {
      req.user = isUser;
    }
    next();
  } catch (error) {
    res.status(400).send('SESSION_NOT_VALIDATED');
  }
};

export { checkJwt };
