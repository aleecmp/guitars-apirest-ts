import ItemModel from '../models/item.model';
import { Guitar } from '../interfaces/guitar.interface';

const insertGuitar = async (item: Guitar) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getGuitars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getGuitar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateGuitar = async (id: string, data: Guitar) => {
  const responseItem = await ItemModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseItem;
};

const deleteGuitar = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};

export { insertGuitar, getGuitars, getGuitar, updateGuitar, deleteGuitar };
