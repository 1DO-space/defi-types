import { Address } from '.';

export interface ICoin {
  symbol: string;
  address: Address;
  decimals: number;
  name: string;
  last_updated?: string;
}
