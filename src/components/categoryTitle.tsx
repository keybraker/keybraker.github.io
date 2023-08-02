export default function CategoryTitle({ title }: { title: string }) {
  return (
    <section className="sm:top-[2.25rem]">
      <div className="pl-4 2eq:pl-[5vw] pr-2 mb-2 eq:mb-0 eq:w-calc">
        <span className="text-xl font-semibold text-tsiakkas-dark dark:text-tsiakkas-light whitespace-nowrap">
          {/* &#8226;  */}
          {title}
        </span>
        <div className=" 2eq:border-b border-tsiakkas-dark dark:border-tsiakkas-light"></div>
      </div>
    </section>
  );
}
