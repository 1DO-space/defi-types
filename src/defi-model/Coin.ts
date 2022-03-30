/**
 * A token data from CoinGecko
 */
export class Coin {
  id: string;
  symbol: string;
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
