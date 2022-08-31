import { Address, Value } from '.';

export interface IPool {
  name: String;
  address: Address;
  liquidity: Value;
  lp_price: Value;
  protocol: String;
}

export interface IProtocol {
  governance_token: String;
  tvl: Value;
  tokenInfo: any[];
}
