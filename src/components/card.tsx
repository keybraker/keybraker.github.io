import type { ReactNode } from "react";

export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
  icon?: ReactNode;
};

function getColourBg(colour: string) {
  const commonClasses = `flex flex-col w-full px-8 py-10 text-tsiakkas-dark gap-4 rounded-lg`;

  switch (colour) {
    case "cyan":
      return `${commonClasses} bg-verge-cyan dark:bg-verge-cyan`;
    case "yellow":
      return `${commonClasses} bg-verge-yellow dark:bg-verge-yellow`;
    case "pink":
      return `${commonClasses} bg-verge-pink/50 dark:bg-verge-pink/75`;
  }
}

export default function Card(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className="
        w-full rounded-xl
        border-[3px] border-tsiakkas-light/20 dark:border-tsiakkas-dark/20
        hover:border-tsiakkas-dark/20 hover:dark:border-tsiakkas-light/100
        transition-colors duration-500
      "
    >
      <div className={`
        ${getColourBg(props.colour)}
      `}>
        <div className="
          leading-100 brief-title
          flex flex-row items-center justify-between gap-4
          text-xl font-extrabold
          text-tsiakkas-dark
        ">
          <span className="text-center sm:text-start">{props.title}</span>
          {props.icon && (
            <span
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110"
            >
              {props.icon}
            </span>
          )}
        </div>
        <div className="
          mb-4
          border-b-2 border-b-tsiakkas-dark/25
        ">
        </div>
        <div
          className="text-lg font-extrabold text-tsiakkas-dark"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      </div>
    </section>
  );
}
