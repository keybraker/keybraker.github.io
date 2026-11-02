import ScrollablePills from '@/components/photography/ScrollablePills';
import type { PhotoWithCategory } from '@/types/photo';

// Commissioned work is intentionally hidden until more images are uploaded.
// Flip this to true to restore the toggle and its gallery.
const SHOW_COMMISSIONED = false;

export default function FiltersBar({
  sections,
  trips = [],
  filter,
  setFilter,
  showCommissioned,
  setShowCommissioned,
  filtered,
  onOpen,
}: {
  sections: { title: string }[];
  trips?: string[];
  filter: string;
  setFilter: (f: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (v: boolean) => void;
  filtered: PhotoWithCategory[];
  onOpen: (photo: PhotoWithCategory) => void;
}) {
  const isDisabled = filtered.length === 0;

  return (
    <div className="sm:sticky sm:top-[124px] md:top-[78px] sm:z-30 bg-tsiakkas-light dark:bg-tsiakkas-dark py-4 px-4 -mx-4 flex flex-wrap md:flex-nowrap gap-3 justify-between items-start md:items-center" aria-label="Photo categories filter">
      <div className="w-full min-w-0 flex flex-col gap-3">
        <div className="flex min-w-0 flex-col-reverse items-center gap-2 sm:flex-row sm:items-center">
          <div className="w-full min-w-0 flex-1">
            <ScrollablePills label="Photo sections filter">
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
                    className={`shrink-0 whitespace-nowrap text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeFilter
                      ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                      : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
                      } `}
                  >
                    {cat}
                  </button>
                );
              })}
            </ScrollablePills>
          </div>

          <div className={`${isDisabled ? '' : 'merge-shimmer'} relative mb-2 shrink-0 rounded-md sm:mb-0`}>
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => {
                if (!filtered.length) return;
                onOpen(filtered[Math.floor(Math.random() * filtered.length)]);
              }}
              className="relative flex items-center whitespace-nowrap rounded-md border border-tsiakkas-dark/30 bg-tsiakkas-light px-3 py-1.5 font-fraunces text-sm text-tsiakkas-dark/70 transition hover:border-tsiakkas-dark/60 hover:bg-tsiakkas-dark/10 hover:text-tsiakkas-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-tsiakkas-dark/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-tsiakkas-dark/30 disabled:hover:bg-tsiakkas-light dark:border-tsiakkas-light/30 dark:bg-tsiakkas-dark dark:text-tsiakkas-light/70 dark:hover:border-tsiakkas-light/60 hover:dark:bg-tsiakkas-dark/10 dark:hover:text-tsiakkas-light dark:focus-visible:ring-tsiakkas-light/40 dark:disabled:hover:border-tsiakkas-light/30 dark:disabled:hover:bg-tsiakkas-dark"
            >
              I am feeling lucky
            </button>
          </div>
        </div>

        {/* <div className="my-2 border-t border-dashed border-tsiakkas-dark/10 dark:border-tsiakkas-light/10" /> */}

        <ScrollablePills label="Photo trips filter">
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
                className={`shrink-0 whitespace-nowrap text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeTrip
                  ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                  : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'
                  } `}
              >
                {trip}
              </button>
            );
          })}
        </ScrollablePills>
      </div>

      {SHOW_COMMISSIONED && (
        <div className="h-full md:w-auto w-full flex justify-start md:justify-end mt-2 md:mt-0 shrink-0">
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
      )}
    </div>
  );
}
