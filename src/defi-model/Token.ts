import { BaseModel, Coin, model } from '.';

export class Token extends BaseModel<String> {
  coin: Coin;
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
