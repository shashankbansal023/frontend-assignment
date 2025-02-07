import { DateRangePickerProps } from "../interface";
import useDatePicker from "../hooks/useDatePicker";

import "../styles.css";
import CalenderView from "./CalendarView";
import PreDefinedRanges from "./PreDefinedRanges";
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";

const DateRangePicker = ({ predefinedRanges = [] }: DateRangePickerProps) => {

  const {
    startDate,
    endDate,
    currentMonth,
    checkRange,
    handleDateClick,
    handleMonthChange,
    handleYearChange,
    handlePredefinedRange,
    weekends,
    range,
  } = useDatePicker();

  return (
    <div>
    <div className="date-range-picker">
      <div className="calendar-controls">
        <button onClick={() => handleMonthChange(-1)}>←</button>
        <SelectMonth
          currentMonth={currentMonth}
          handleMonthChange={handleMonthChange}
        />
        <SelectYear
          currentMonth={currentMonth}
          handleYearChange={handleYearChange}
        />
        <button onClick={() => handleMonthChange(1)}>→</button>
      </div>
      <CalenderView
        checkRange={checkRange}
        currentMonth={currentMonth}
        endDate={endDate}
        startDate={startDate}
        handleDateClick={handleDateClick}
      />
      <PreDefinedRanges
        predefinedRanges={predefinedRanges}
        handlePredefinedRange={handlePredefinedRange}
      />
    </div>
        {startDate && endDate ? (
            <div className="selection-info">
            {startDate && endDate && range?.length && (
                <div className="selected-range">
                <h4>Selected Range:</h4>
                <p>
                    {range[0]} to {range[1]}
                </p>
                </div>
            )}
            <br/>
            {weekends.length > 0 && (
                <div className="weekend-list">
                <h4>Weekends in Range:</h4>
                <ul>
                    {weekends.map((date) => (
                    <li key={date}>{date}</li>
                    ))}
                </ul>
                </div>
            )}
        </div>
        ): null}
    </div>
  );
};

export default DateRangePicker;
