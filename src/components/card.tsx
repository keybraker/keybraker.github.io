export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

function getColourBg(colour: string) {
  const commonClasses = `flex flex-col w-full px-8 py-10 text-tsiakkas-dark gap-4 rounded-lg`;

  switch (colour) {
    case "cyan":
      return `${commonClasses} bg-verge-cyan dark:bg-verge-cyan`;
    case "yellow":
      return `${commonClasses} bg-verge-yellow dark:bg-verge-yellow`;
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
          block text-xl font-extrabold
          text-tsiakkas-dark
          text-center sm:text-start
        ">
          {props.title}
        </div>
        <div className="
          mb-4
          border-b-2 border-b-tsiakkas-dark/10
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
