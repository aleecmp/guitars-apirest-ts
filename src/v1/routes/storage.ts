import { Router } from 'express';
import { getFile } from '../../controllers/storage.controller';
import multerMiddleware from '../../middleware/file';
import { checkJwt } from '../../middleware/session';

const router = Router();

/**
 * get all items
 * @openapi
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: Upload a file to storage
 *      description:
 *      requestBody:
 *        content:
 *          multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myFile:
 *                 type: string
 *                 format: binary
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */

router.post('/', checkJwt, multerMiddleware.single('myFile'), getFile);

export { router };
