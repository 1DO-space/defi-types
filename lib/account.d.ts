import { Address, ChainName, Value } from '.';

export interface AccountKeyValues {
  [key: Address]: Array<ChainName>;
}

export interface IAccount {
  address: string;
  chain: string;
}

export default interface IAsset {
  symbol: string;
  value: Value;
  price: Value;
}
