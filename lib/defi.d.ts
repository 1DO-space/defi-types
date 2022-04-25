import { Address, IDocument, Value } from '.';

export interface IPool extends IDocument {
  name: String;
  address: Address;
  liquidity: Value;
  lp_price: Value;
  protocol: String;
}

export interface IProtocol extends IDocument {
  governance_token: String;
  tvl: Value;
  tokenInfo: any[];
}
