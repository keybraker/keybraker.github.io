export enum TailwindColorEnum {
  SLATE = "slate",
  GRAY = "gray",
  ZINC = "zinc",
  NEUTRAL = "neutral",
  STONE = "stone",
  RED = "red",
  ORANGE = "orange",
  AMBER = "amber",
  YELLOW = "yellow",
  LIME = "lime",
  GREEN = "green",
  EMERALD = "emerald",
  TEAL = "teal",
  CYAN = "cyan",
  SKY = "sky",
  BLUE = "blue",
  INDIGO = "indigo",
  VIOLET = "violet",
  PURPLE = "purple",
  FUCHSIA = "fuchsia",
  PINK = "pink",
  ROSE = "rose",
}

export type CardColour =
  | "cyan"
  | "yellow"
  | "pink"
  | "purple"
  | "blue"
  | "orange";

/** Single source of truth for the coloured card backgrounds across the site. */
export const cardColours: Record<CardColour, string> = {
  cyan: "bg-verge-cyan/70 dark:bg-verge-cyan/90",
  yellow: "bg-verge-yellow/70 dark:bg-verge-yellow/90",
  pink: "bg-verge-pink/70 dark:bg-verge-pink/90",
  purple: "bg-verge-purple/70 dark:bg-verge-purple/90",
  blue: "bg-verge-blue/70 dark:bg-verge-blue/90",
  orange: "bg-verge-orange/70 dark:bg-verge-orange/90",
};

export function getCardColourBg(colour: CardColour): string {
  return cardColours[colour];
}
