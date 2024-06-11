import { DateTime, Interval, DurationObjectUnits } from "luxon";
import { months } from "./constants";

type TimeUnit = "day" | "week" | "month";

export const equalTo = (dateToCompare: DateTime, actualDate: DateTime) => {
  return (
    dateToCompare.year === actualDate.year &&
    dateToCompare.month === actualDate.month &&
    dateToCompare.day === actualDate.day
  );
};

export const isoNow = () => DateTime.now().toISODate();

const getTimeUnitRange = (timeUnit: TimeUnit): DurationObjectUnits => {
  switch (timeUnit) {
    case "day":
      return { days: 1 };
    case "week":
      return { weeks: 1 };
    case "month":
    default:
      return { months: 1 };
  }
};

const intervalFor = (interval: Interval, timeUnit: TimeUnit) => {
  const rangeOfDates: DateTime[] = [];
  const nextRange = getTimeUnitRange(timeUnit);

  let cursor = interval.start!.startOf(timeUnit);
  while (cursor < interval.end!) {
    const currentWorkingDate = cursor.startOf(timeUnit);
    rangeOfDates.push(currentWorkingDate);
    cursor = cursor.plus(nextRange);
  }

  return rangeOfDates;
};

export const rangeOfDays = (interval: Interval) => intervalFor(interval, "day");
export const rangeOfWeeks = (interval: Interval) =>
  intervalFor(interval, "week");
export const rangeOfMonths = (interval: Interval) =>
  intervalFor(interval, "month");

export const getMonthName = (month: number) => months[month - 1];
