export function getPeriodBetween(date1: Date, date2: Date): string {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();

    if (months < 0 || (months === 0 && date2.getDate() < date1.getDate())) {
        years--;
        months += 12;
    }

    let result = '';
    if (years > 0) {
        result += years === 1 ? `${years} yr ` : `${years} yrs`;
    }

    if (months > 0) {
        result += months === 1 ? `${months} mo` : `${months} mos`;
    }

    return result || '0';
}