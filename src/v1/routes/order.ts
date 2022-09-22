import { Router } from 'express';
import { getItems } from '../../controllers/order.controller';
import { checkJwt } from '../../middleware/session';

const router = Router();

/**
 * Protected path for users with active
 * session and a valid JWT
 */

/**
 * get all items
 * @openapi
 * /order:
 *    get:
 *      tags:
 *        - order
 *      summary: Get all orders for a user (by JWT)
 *      description:
 *      responses:
 *        '200':
 *          description: OK
 *        '422':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */

router.get('/', checkJwt, getItems);

export { router };
