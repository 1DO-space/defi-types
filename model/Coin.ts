import { ICoin } from '../types';

/**
 * A token data from CoinGecko
 */
export class Coin implements ICoin {
  id: string;
  symbol: string;
  address: string;
  decimals: number;
  name: string;
  last_updated: string;

  constructor(source?: Partial<Coin>) {
    Object.assign(this, source);
  }

  /** Last updated timestamp */
  get timestamp() {
    return Date.parse(this.last_updated);
  }
}
