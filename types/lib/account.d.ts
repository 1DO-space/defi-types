import { Address, ChainName, ICoin, Value } from '.';

export interface IAccount {
  address: string;
  chain: string;
}

export interface IAsset {
  balance: Value;
  price?: Value;
  value?: Value;
}

export interface ICoinAsset extends IAsset, ICoin {
  logo: string;
}

export interface IChain {
  name: ChainName;
  assets: IAsset[];
}
