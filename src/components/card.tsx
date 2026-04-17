export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

export default function Card(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className="
        w-full rounded-lg
        border-2 border-tsiakkas-light/20 dark:border-tsiakkas-dark/20
        hover:border-tsiakkas-dark/20 hover:dark:border-tsiakkas-light
        transition-colors duration-500
      "
    >
      <div className={`
        flex flex-col w-full rounded-md px-6 py-7
        text-tsiakkas-dark gap-4
        border-4 border-${props.colour}/30
        bg-${props.colour}/80 dark:bg-${props.colour}/75
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
