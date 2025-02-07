export type DateRange = [string, string];
export type WeekendDates = string[];
export type DatePickerResult = [DateRange, WeekendDates];

export interface DateRangePickerProps {
  predefinedRanges?: Array<{ label: string; days: number }>;
//   onChange: (result: DatePickerResult) => void;
}

export interface ICalenderProps {
    currentMonth: Date,
    startDate: Date| null,
    endDate: Date | null,
    checkRange: (date: Date) => boolean | null,
    handleDateClick: (date: Date) => void
}

export interface IPreDefinedRanges {
    predefinedRanges: DateRangePickerProps["predefinedRanges"];
    handlePredefinedRange: (days: number) => void;
}