import { ObjectId } from 'bson';
import * as crypto from 'crypto';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { MONGO_URI } from '../env';
import assert = require('assert');

export type ModelStatic<T, S> = Model<T, S> & S;
export type Query<T> = mongoose.QueryWithHelpers<
  mongoose.UpdateWriteOpResult,
  Document,
  {},
  T
>;

mongoose
  .connect(MONGO_URI, {})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(console.error);

export class Document<Key = any, DocType = any> extends mongoose.Document<
  Key,
  {},
  DocType
> {
  get latest() {
    return Model.findById<DocType>(this);
  }

  async reload() {
    let doc = await this.latest;
    Object.assign(this, doc);
    return doc;
  }
}

export class BaseModel<Key> extends Model<BaseModel<Key>> {
  _id: Key;
}

export interface IModelStatic<T extends BaseModel<any>> {
  new (): T;
  definition: mongoose.SchemaDefinition<
    mongoose.SchemaDefinitionType<Document<any, T>>
  >;
}

export function _id(text: string) {
  assert(text);
  let oid = crypto
    .createHash('md5')
    .update(text)
    .digest('hex')
    .substring(0, 24);
  return new ObjectId(oid);
}

export function model<
  T extends BaseModel<any>,
  S extends IModelStatic<T> = any
>(model: S): ModelStatic<T, S> {
  let { definition, name } = model;
  let scheme = new mongoose.Schema(definition);
  scheme.loadClass(model);
  return mongoose.model<Document<any, T>, ModelStatic<T, S>>(
    name,
    scheme,
    name.toLowerCase()
  );
}

/* class decorator */
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
