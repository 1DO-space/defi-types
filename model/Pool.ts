import { Address, IPool, Value } from '../types';
import { BaseModel, model } from '.';

export class Pool extends BaseModel<String> implements IPool {
  name: String;
  address: Address;
  liquidity: Value;
  lp_price: Value;
  protocol: String;
  updated_at: Date;

  static definition = {
    _id: String,
    name: String,
    address: String,
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
