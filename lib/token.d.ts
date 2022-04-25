import { Address, IDocument, Value } from '.';

export interface ICoin {
  symbol: string;
  address: Address;
  name: string;
  last_updated?: string;
}

export interface IToken extends IDocument {
  coin: Partial<ICoin>;
}
