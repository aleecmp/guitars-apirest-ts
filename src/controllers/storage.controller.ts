import { Response } from 'express';
import { RequestExt } from '../interfaces/req-ext.interface';
import { Storage } from '../interfaces/storage.interface';
import { uploadRegister } from '../services/storage.services';
import { handleHttp } from '../utils/error.handle';

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await uploadRegister(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG');
  }
};

export { getFile };
