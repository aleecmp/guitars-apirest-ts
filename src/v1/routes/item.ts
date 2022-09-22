import { Router } from 'express';
import {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem,
} from '../../controllers/item.controller';
import { logMiddleware } from '../../middleware/log';

const router = Router();

/**
 * get all items
 * @openapi
 * /item:
 *    get:
 *      tags:
 *        - item
 *      summary: Get all items
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.get('/', getItems);

/**
 * get item by ID
 * @openapi
 * /item/{id}:
 *    get:
 *      tags:
 *        - item
 *      summary: Get item by ID
 *      parameters:
 *        - $ref: '#/components/parameters/itemId'
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.get('/:id', logMiddleware, getItem);

/**
 * post item
 * @openapi
 * /item:
 *    post:
 *      tags:
 *        - item
 *      summary: Add a new item
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/item"
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.post('/', postItem);

/**
 * edit item
 * @openapi
 * /item/{id}:
 *    put:
 *      tags:
 *        - item
 *      summary: Update an item by ID
 *      parameters:
 *        - $ref: "#/components/parameters/itemId"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/item"
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.put('/:id', updateItem);

/**
 * delete item
 * @openapi
 * /item/{id}:
 *    delete:
 *      tags:
 *        - item
 *      summary: Delete an item by ID
 *      parameters:
 *        - $ref: "#/components/parameters/itemId"
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: ERROR
 *      security:
 *       - bearerAuth: []
 */
router.delete('/:id', deleteItem);

export { router };
