import { ICoin } from '../types';
import { BaseModel, model } from '.';

export class Token extends BaseModel<String> {
  coin: ICoin;
  price: Document;
  updated_at: Date;

  static definition = {
    _id: String,
    coin: {
      id: String,
      symbol: String,
      name: String,
      last_updated: String,
    },
    timestamp: Number,
  };
}

export const TokenModel = model(Token);
