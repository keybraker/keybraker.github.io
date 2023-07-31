export default function CategoryTitle({ title }: { title: string }) {
  return (
    <section className="sticky left-0 top-10 xs:top-[2.3rem] ml-4 pr-2 mb-2 equilibrium:mb-0 equilibrium:w-calc dark:bg-tsiakkas-dark bg-tsiakkas-light ">
      <span className="text-xl font-semibold text-tsiakkas-dark dark:text-tsiakkas-light text-center xs:text-left">
        {/* &#8226;  */}
        {title}
      </span>
      <div className="border-dotted equilibrium:border-b border-tsiakkas-dark dark:border-tsiakkas-light"></div>
    </section>
  );
}
