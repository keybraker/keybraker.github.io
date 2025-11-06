export type Photo = {
  id: number;
  caption: string;
  settings: string;
  location: string;
  country: string;
  image: string;
  originalImage: string;
  isCommissioned: boolean;
};

export type Section = { title: string; photos: Photo[] };

export type PhotoWithCategory = Photo & {
  category: string;
  orientation: 'portrait' | 'landscape';
};
