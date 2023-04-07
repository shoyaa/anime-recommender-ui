import BaseDexie from "dexie";

import { likedSchema, LikedTable } from "./tables/likedAnimes";

type DexieTables = LikedTable;
export type Dexie<T extends any = DexieTables> = BaseDexie & T;

export const db = new BaseDexie("anime") as Dexie;
const schema = Object.assign({}, likedSchema);
db.version(1).stores(schema);
