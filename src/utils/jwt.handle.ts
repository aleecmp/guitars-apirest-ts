import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';

const generateToken = (id: string) => {
  const jwt = sign({ id }, <string>process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, <string>process.env.JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
