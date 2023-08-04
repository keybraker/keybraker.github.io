export type CategoryProps = {
  title: string;
  description: string;
  colour: string;
};

export default function Category(props: CategoryProps) {
  return (
    <section className={`eq:sticky eq:top-[98px] w-full eq:w-fit eq:min-h-[240px] eq:ml-16 p-6 rounded-2xl text-black ${props.colour}`}>
      <div className="text-2xl font-extrabold leading-100 text-tsiakkas-dark brief-title block eq:hidden">{props.title}</div>
      <span className="text-xl font-semibold">
        {props.description}
      </span>
      {/* <div className="absolute bottom-[-10px] right-0 h-full font-bold leading-100 lg:flex rotate-90 text-verge-cyan">{title}</div> */}
      <div className="absolute h-full w-full left-[-215px] top-[-180px] -z-10 hidden rotate-[270deg] text-xl font-extrabold leading-100 eq:flex text-tsiakkas-dark dark:text-tsiakkas-light brief-title">{props.title}</div>
    </section>
  );
}
