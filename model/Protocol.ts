import { BaseModel, model } from '.';

export class Protocol extends BaseModel<String> {
  governance_token: String;
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
