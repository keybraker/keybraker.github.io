import type { PhotoWithCategory } from '@/types/photo';

export type MonthGroup = {
  month: number; // 1-12
  label: string; // e.g., 'January'
  photos: PhotoWithCategory[];
};

export type YearGroup = {
  year: number;
  months: MonthGroup[];
};

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function groupPhotosByYearMonth(photos: PhotoWithCategory[]): YearGroup[] {
  // Only consider photos with a date; others fall into year 0/month 0 bucket at the end
  const groups = new Map<number, Map<number, PhotoWithCategory[]>>();
  const undated: PhotoWithCategory[] = [];

  for (const p of photos) {
    if (!p.date) {
      undated.push(p);
      continue;
    }
    const d = new Date(p.date);
    if (isNaN(d.getTime())) {
      undated.push(p);
      continue;
    }
    const year = d.getFullYear();
    const month = d.getMonth() + 1; // 1-12
    if (!groups.has(year)) groups.set(year, new Map());
    const m = groups.get(year)!;
    if (!m.has(month)) m.set(month, []);
    m.get(month)!.push(p);
  }

  const sortPhotos = (arr: PhotoWithCategory[]) =>
    arr.slice().sort((a, b) => {
      const ta = a.date ? new Date(a.date).getTime() : 0;
      const tb = b.date ? new Date(b.date).getTime() : 0;
      if (tb !== ta) return tb - ta;
      return (b.id || 0) - (a.id || 0);
    });

  const result: YearGroup[] = Array.from(groups.entries())
    .sort((a, b) => b[0] - a[0]) // year desc
    .map(([year, monthsMap]) => {
      const months: MonthGroup[] = Array.from(monthsMap.entries())
        .sort((a, b) => b[0] - a[0]) // month desc within year
        .map(([month, arr]) => ({
          month,
          label: MONTH_NAMES[month - 1],
          photos: sortPhotos(arr)
        }));
      return { year, months };
    });

  if (undated.length) {
    result.push({
      year: 0,
      months: [{ month: 0, label: 'Unknown date', photos: sortPhotos(undated) }]
    });
  }

  return result;
}
