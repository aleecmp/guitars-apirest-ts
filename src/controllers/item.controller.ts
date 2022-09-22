import { Request, Response } from 'express';
import {
  insertGuitar,
  getGuitars,
  getGuitar,
  updateGuitar,
  deleteGuitar,
} from '../services/item.sevices';
import { handleHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getGuitar(id);
    const data = response ? response : 'NOT_FOUND';
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG');
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getGuitars();
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS');
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertGuitar(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_BLOG', error);
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateGuitar(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_BLOG');
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteGuitar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG');
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
