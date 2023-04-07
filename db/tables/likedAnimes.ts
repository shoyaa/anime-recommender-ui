import { Table } from "dexie";

export type Liked = {
  id: number;
  title: string;
  image: string;
  members: number;
  genres: string[];
  synopsis: string;
  status: string;
  episodes: number;
  mal_id: number;
  isLiked: boolean;
};

export type LikedTable = {
  liked: Table<Liked>;
};

export const likedSchema = {
  liked: "id",
};
