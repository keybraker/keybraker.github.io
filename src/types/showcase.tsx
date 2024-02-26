export type ShowcaseType = {
  start: Date;
  end: Date | null;
  title: string;
  info: string;
  position: string;
  link?: string;
  description?: string[];
  technologies?: string[];
};
