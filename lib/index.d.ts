export type Address = string;
export type ChainName = string;
export type Value = number;

export interface IDocument {
  updated_at: Date;
}

export * from './account';
export * from './defi';
export * from './token';
