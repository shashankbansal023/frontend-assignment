const SelectMonth = ({currentMonth, handleMonthChange}: {
    currentMonth: Date,
    handleMonthChange: (days: number) => void;
}) => {
    return (
        <select
        value={currentMonth.getMonth()}
        onChange={(e) =>
          handleMonthChange(
            parseInt(e.target.value) - currentMonth.getMonth()
          )
        }
      >
        {[...Array(12).keys()].map((month) => (
          <option key={month} value={month}>
            {new Date(0, month).toLocaleString("default", { month: "long" })}
          </option>
        ))}
      </select>
    )
}

export default SelectMonth;