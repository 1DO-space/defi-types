import { IDocument } from '.';

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  last_updated: string;
}

export interface IToken extends IDocument {
  coin: ICoin;
}
