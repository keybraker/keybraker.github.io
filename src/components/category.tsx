export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

export default function Category(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className={`
        w-full rounded-2xl p-6 text-tsiakkas-dark eq:sticky eq:top-[98px] eq:ml-16 eq:min-h-[240px] eq:w-fit eq:min-w-[400px] ${props.colour}
      `}
    >
      <div className="leading-100 brief-title mb-4  border-b-2 border-dotted border-b-tsiakkas-dark block text-xl font-extrabold text-tsiakkas-dark sm:text-2xl eq:hidden">
        {props.title}
      </div>
      <div
        className="text-lg font-extrabold text-tsiakkas-dark"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
      {/* <div className="absolute bottom-[-10px] right-0 h-full font-bold leading-100 eq:flex rotate-90 text-verge-cyan">{title}</div> */}
      <div className="leading-100 brief-title absolute left-[-215px] top-[-180px] -z-10 hidden h-full w-full rotate-[270deg] text-xl font-extrabold text-tsiakkas-dark dark:text-tsiakkas-light eq:flex">
        {props.title}
      </div>
    </section>
  );
}
