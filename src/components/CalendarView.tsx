import { generateCalendar, isWeekend } from "../utils";
import { ICalenderProps } from "../interface";

 const CalenderView = ({currentMonth, startDate, endDate, checkRange, handleDateClick}: ICalenderProps) => {

    return (
        <div className="calendar-grid">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="calendar-header">
            {day}
          </div>
        ))}
        {generateCalendar(currentMonth).map((date, index) => (
          <button
            key={index}
            className={`calendar-day 
              ${date ? (isWeekend(date) ? "weekend" : "") : "empty"}
              ${
                date &&
                startDate?.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)
                  ? "selected-start"
                  : ""
              }
              ${
                date &&
                endDate?.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)
                  ? "selected-end"
                  : ""
              }
              ${
                date &&
                startDate &&
                endDate &&
                checkRange(date) &&
                !isWeekend(date)
                  ? "selected-range"
                  : ""
              }
            `}
            onClick={() => date && handleDateClick(date)}
            disabled={date ? isWeekend(date) : true}
          >
            {date?.getDate()}
          </button>
        ))}
      </div>
    )
 }

 export default CalenderView;