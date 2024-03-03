export function getPeriodBetween(from: Date, to: Date | null): string {
    to = to || new Date();
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();

    if (months < 0 || (months === 0 && to.getDate() < from.getDate())) {
        years--;
        months += 12;
    }

    let result: string[] = [];
    if (years > 0) {
        result = result.concat(years === 1 ? [`${years}y`] : [`${years}ys`]);
    }

    if (months > 0) {
        result = result.concat(months === 1 ? [`${months}m`] : [`${months}ms`]);
    }

    return result.join(' and ') || '';
}