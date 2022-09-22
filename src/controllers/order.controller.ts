import { Response } from 'express';
import { RequestExt } from '../interfaces/req-ext.interface';
import { handleHttp } from '../utils/error.handle';

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'VALIDATED_USER',
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS');
  }
};

export { getItems };
