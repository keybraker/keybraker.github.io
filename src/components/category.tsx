export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

export default function Category(props: CategoryProps) {
  return (
    <section
      id={props.title.split(" ").join("-").toLowerCase()}
      className={`eq:sticky eq:top-[98px] w-full eq:min-w-[400px] eq:w-fit eq:min-h-[240px] eq:ml-16 p-6 rounded-2xl text-tsiakkas-dark ${props.colour}`}
    >
      <div className="text-xl sm:text-2xl text-tsiakkas-dark font-extrabold leading-100 brief-title block eq:hidden mb-4">{props.title}</div>
      <div className="text-lg sm:text-xl text-tsiakkas-dark font-semibold" dangerouslySetInnerHTML={{ __html: props.description }}></div>
      {/* <div className="absolute bottom-[-10px] right-0 h-full font-bold leading-100 eq:flex rotate-90 text-verge-cyan">{title}</div> */}
      <div className="absolute h-full w-full left-[-215px] top-[-180px] -z-10 hidden eq:flex rotate-[270deg] text-xl font-extrabold leading-100 text-tsiakkas-dark dark:text-tsiakkas-light brief-title">{props.title}</div>
    </section>
  );
}
