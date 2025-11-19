export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

export default function Card(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className={`
        flex flex-col w-full rounded-xl px-6 py-7
        text-tsiakkas-dark gap-4
        ${props.colour}
      `}
    >
      <div className="
        leading-100 brief-title
        block text-xl font-extrabold text-tsiakkas-dark text-center sm:text-start
      ">
        {props.title}
      </div>
      <div className="
        mb-4
        border-b-2 border-dotted border-b-tsiakkas-dark/40
      ">
      </div>
      <div
        className="text-lg font-extrabold text-tsiakkas-dark"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
    </section>
  );
}
