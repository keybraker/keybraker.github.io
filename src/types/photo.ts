export type Photo = {
  id: number;
  caption: string;
  settings: string;
  location: string;
  country: string;
  image: string;
  originalImage: string;
  isCommissioned: boolean;
  date?: string;
  width: number;
  height: number;
};

export type Section = {
  title: string;
   photos: Photo[]
};

export type PhotoWithCategory = Photo & {
  category: string;
  orientation: 'portrait' | 'landscape';
};
