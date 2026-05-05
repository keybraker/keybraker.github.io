
export default function FiltersBar({
  sections,
  trips = [],
  filter,
  setFilter,
  showCommissioned,
  setShowCommissioned,
  isMobile,
}: {
  sections: { title: string }[];
  trips?: string[];
  filter: string;
  setFilter: (f: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (v: boolean) => void;
  isMobile: boolean;
}) {
  return (
    <div className="sm:sticky sm:top-[70px] sm:z-30 bg-tsiakkas-light dark:bg-tsiakkas-dark py-4 px-4 -mx-4 flex flex-wrap md:flex-nowrap gap-3 justify-between items-start md:items-center" aria-label="Photo categories filter">
      <div className="md:w-3/4 w-full flex flex-col gap-6">
        <nav className="flex flex-wrap gap-3 justify-start">
          {["All", ...sections.map((s) => s.title)].map((cat) => {
            const activeFilter = !showCommissioned && filter === cat;
            return (
              <button
                key={cat}
                aria-pressed={activeFilter}
                onClick={() => {
                  setShowCommissioned(false);
                  setFilter(cat);
                }}
                className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeFilter
                  ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                  : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
                  } `}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {/* <div className="my-2 border-t border-dashed border-tsiakkas-dark/10 dark:border-tsiakkas-light/10" /> */}

        <nav className="flex flex-wrap gap-3 justify-start">
          {trips.map((trip: string) => {
            const activeTrip = !showCommissioned && filter === trip;
            return (
              <button
                key={trip}
                aria-pressed={activeTrip}
                onClick={() => {
                  setShowCommissioned(false);
                  setFilter(trip);
                }}
                className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeTrip
                  ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                  : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
                  } `}
              >
                {trip}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="h-full md:w-1/4 w-full flex justify-start md:justify-end mt-2 md:mt-0">
        <button
          aria-pressed={showCommissioned}
          onClick={() => setShowCommissioned(!showCommissioned)}
          className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 flex-shrink-0 ${showCommissioned
            ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
            : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
            } `}
        >
          Commissioned Work
        </button>
      </div>
    </div>
  );
}
