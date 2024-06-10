export const getMonthFromDate = (date: Date): string =>
  date.toLocaleString("default", { month: "long" });

export const changeMonth = ({
  selectedDate,
  shouldIncrement = true,
  step = 1,
}: {
  selectedDate: Date;
  shouldIncrement?: boolean;
  step?: number;
}) =>
  new Date(
    selectedDate.setMonth(
      selectedDate.getMonth() + (shouldIncrement ? step : -step)
    )
  );
