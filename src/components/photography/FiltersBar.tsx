import React from 'react';

export default function FiltersBar({
  sections,
  filter,
  setFilter,
  showCommissioned,
  setShowCommissioned,
  isMobile,
}: {
  sections: { title: string }[];
  filter: string;
  setFilter: (f: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (v: boolean) => void;
  isMobile: boolean;
}) {
  return (
    <div className="sm:sticky sm:top-[70px] sm:z-30 bg-tsiakkas-light dark:bg-tsiakkas-dark py-4 px-4 -mx-4 flex flex-wrap md:flex-nowrap gap-3 justify-between items-start md:items-center" aria-label="Photo categories filter">
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
                className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${
                  activeFilter
                    ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                    : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
                } `}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        <button
          aria-pressed={showCommissioned}
          onClick={() => setShowCommissioned(!showCommissioned)}
          className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 flex-shrink-0 ${
            showCommissioned
              ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
              : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
          } `}
        >
          Commissioned Work
        </button>
    </div>
  );
}
