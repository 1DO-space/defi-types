import { Schema } from 'mongoose';
import { BaseModel, model } from '.';

export class Pool extends BaseModel<Schema.Types.ObjectId> {
  name: String;
  liquidity: Number;
  lp_price: Number;
  protocol: String;
  updated_at: Date;

  static definition = {
    _id: Schema.Types.ObjectId,
    name: String,
    liquidity: Number,
    lp_price: Number,
    protocol: {
      type: String,
      ref: 'protocol',
      default: null,
    },
    updated_at: Date,
  };
}

export const PoolModel = model(Pool);
