import { Schema, Types, model, Model } from 'mongoose';
import { Guitar } from '../interfaces/guitar.interface';

const ItemSchema = new Schema<Guitar>(
  {
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      enum: ['acoustic', 'electro acoustic', 'electric'],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model('items', ItemSchema);

export default ItemModel;
