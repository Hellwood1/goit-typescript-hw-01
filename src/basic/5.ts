enum WeekDays {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}

const isWeekend = (day: WeekDays): boolean => {
  return day === WeekDays.Sat || day === WeekDays.Sun;
};