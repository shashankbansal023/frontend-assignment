const SelectYear = ({currentMonth, handleYearChange}: {
    currentMonth: Date,
    handleYearChange: (years: number) => void;
}) => {
    return (
        <input
          type="number"
          value={currentMonth.getFullYear()}
          onChange={(e) => handleYearChange(parseInt(e.target.value))}
        />
    )
}
export default SelectYear;