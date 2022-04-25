export type Address = string;
export type ChainName = string;
export type Value = number | string;

export interface IDocument {
  updated_at?: Date | null;
}

export * from './account';
export * from './defi';
export * from './token';
