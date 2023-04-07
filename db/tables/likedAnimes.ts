import { Table } from "dexie";

export type Liked = {
  id?: number;
  isLiked: boolean;
};

export type LikedTable = {
  liked: Table<Liked>;
};

export const likedSchema = {
  liked: "id",
};
