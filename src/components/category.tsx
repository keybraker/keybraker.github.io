import { CardColour, getCardColourBg } from "@/enum/color";

export type CategoryProps = {
  title: string;
  description: string;
  colour: CardColour;
};

export default function Category(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className={`w-full rounded-xl p-6 text-tsiakkas-dark eq:sticky eq:top-[98px] eq:ml-16 eq:min-h-[240px] eq:w-fit eq:min-w-[400px] ${getCardColourBg(props.colour)}`}
    >
      <div className="leading-none brief-title mb-4 pb-4 border-b-2 border-dotted border-b-tsiakkas-dark/40 block text-xl font-extrabold text-tsiakkas-dark eq:hidden text-center sm:text-start">
        {props.title}
      </div>
      <div
        className="text-lg font-extrabold text-tsiakkas-dark"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
      <div className="
        absolute bottom-0 right-full mr-8 rotate-180
        hidden whitespace-nowrap [writing-mode:vertical-rl]
        leading-none text-xl font-extrabold text-tsiakkas-dark
        dark:text-tsiakkas-light eq:block
      ">
        {props.title}
      </div>
    </section>
  );
}
