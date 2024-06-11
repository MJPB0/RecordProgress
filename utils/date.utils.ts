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

export const generateCalendarMonth = (date: DateTime) => {
  const startOfMonth = date.startOf("month");
  const endOfMonth = date.endOf("month");

  //? PREVIOUS MONTH
  const daysInPreviousMonth = [...Array(startOfMonth.weekday - 1)].map((_, i) =>
    startOfMonth.minus({ days: startOfMonth.weekday - i - 1 })
  );

  //? CURRENT MONTH
  const interval = Interval.fromDateTimes(startOfMonth, endOfMonth);
  const range = rangeOfDays(interval);

  //? NEXT MONTH
  const daysInNextMonth = [...Array(7 - endOfMonth.weekday)].map((_, i) =>
    endOfMonth.plus({ days: i + 1 })
  );

  const generatedDays = [...daysInPreviousMonth, ...range, ...daysInNextMonth];

  //? SPLIT INTO WEEKS
  const weeks = [];
  for (let i = 0; i < generatedDays.length; i += 7) {
    weeks.push(generatedDays.slice(i, i + 7));
  }

  return weeks;
};
