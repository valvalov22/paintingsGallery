export type TAuthors = {
  id: number;
  name: string;
};

export type TPictures = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type TLocations = {
  id: number;
  location: string;
};
