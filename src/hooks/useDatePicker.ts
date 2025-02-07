import { useEffect, useState } from "react";
import { WeekendDates } from "../interface";
import { formatDateLocal, isWeekend } from "../utils";

const useDatePicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [range, setRange] = useState<string[]>();
    const [weekends, setWeekends] = useState<WeekendDates>([]);
  
 
    const handleDateClick = (date: Date) => {
      if (isWeekend(date)) return;
  
      if (!startDate || (startDate && endDate)) {
        setStartDate(date);
        setEndDate(null);
      } else if (date > startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    };

    const onChangeWeekendsAndRangeHandler = (startDate: Date, endDate: Date) => {
        const weekends: WeekendDates = [];
        const current = new Date(startDate);
        current.setHours(0,0,0,0);
        
        const end = new Date(endDate);
        end.setHours(0,0,0,0);
        
        while (current <= endDate) {
          if (isWeekend(current)) {
            weekends.push(formatDateLocal(current));
          }
          current.setDate(current.getDate() + 1);
        }

        setRange([
                formatDateLocal(startDate),
                formatDateLocal(endDate)
             ],);
        setWeekends(weekends);
    }
  
    const checkRange = (date: Date) => {
      return startDate && endDate && (new Date(date).setHours(0,0,0,0) > startDate.setHours(0,0,0,0)) &&
      (new Date(date).setHours(0,0,0,0) < endDate?.setHours(0,0,0,0))
    }
  
    const handleMonthChange = (months: number) => {
      const newDate = new Date(currentMonth);
      newDate.setMonth(newDate.getMonth() + months);
      setCurrentMonth(newDate);
    };
  
    const handleYearChange = (year: number) => {
      const newDate = new Date(currentMonth);
      newDate.setFullYear(year);
      setCurrentMonth(newDate);
    };
  
    const handlePredefinedRange = (days: number) => {
        const end = new Date();
        end.setHours(0, 0, 0, 0); // Reset time to midnight
        let start = new Date();
        start.setDate(start.getDate() - (days - 1));
        start.setHours(0, 0, 0, 0);
      
        // Adjust to nearest weekdays
        while (isWeekend(start)) {
          start.setDate(start.getDate() + 1);
          start.setHours(0, 0, 0, 0);
        }
        while (isWeekend(end)) {
          end.setDate(end.getDate() - 1);
          end.setHours(0, 0, 0, 0);
        }
        
        setStartDate(start);
        setEndDate(end);
    };
  
    useEffect(() => {
      if (startDate && endDate) {
        onChangeWeekendsAndRangeHandler(startDate, endDate);
      }
    }, [startDate, endDate, onChangeWeekendsAndRangeHandler]);

    return {
        startDate,
        endDate,
        checkRange,
        currentMonth,
        handlePredefinedRange,
        handleMonthChange,
        handleDateClick,
        handleYearChange,
        range,
        weekends,
    }

}

export default useDatePicker;