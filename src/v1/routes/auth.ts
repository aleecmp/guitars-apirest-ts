import { Request, Response, Router } from 'express';
import {
  registerController,
  loginController,
} from '../../controllers/auth.controller';

const router = Router();

/**
 * register
 * @openapi
 * /auth/register:
 *    post:
 *      tags:
 *        - auth
 *      summary: Register an user
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userRegister"
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.post('/register', registerController);

/**
 * login
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: Login an user
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userLogin"
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.post('/login', loginController);

export { router };
