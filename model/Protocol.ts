import { IProtocol, Value } from '../types';
import { BaseModel, model } from '.';

export class Protocol extends BaseModel<String> implements IProtocol {
  governance_token: String;
  tvl: Value;
  tokenInfo: any[];
  updated_at: Date;

  static definition = {
    _id: String,
    governance_token: {
      type: String,
      ref: 'token',
    },
    updated_at: Date,
  };
}

export const ProtocolModel = model(Protocol);
