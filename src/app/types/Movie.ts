import { Genre } from "./Genre";

export type Movie = {
  id: number;
  title: string;
  description: string;
  yearLaunched: string;
  link: string;
  castMembers: string[];
  genres: Genre[];
  thumbFileURL: string;
  bannerFileURL: string;
  videoFileURL: string;
  rating: string;
};

export type Movies = Movie[];
