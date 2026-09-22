/**
 * A single block of a showcase description.
 *
 * The optional `title` is rendered above the bullets and omitted entirely when
 * empty. Use it to label phases of the same entry, e.g. an internal promotion.
 */
export type ShowcaseDescriptionGroup = {
  title?: string;
  bullets: string[];
};

export type ShowcaseType = {
  start: Date;
  end: Date | null;
  title: string;
  titleDescription?: string;
  info: string;
  position?: string;
  link?: string;
  description?: ShowcaseDescriptionGroup[];
  technologies?: string[];
};
