import DateRangePicker from "./components/DatePicker"
import './styles.css';


function App() {

  return (
    <div className="container">
      <DateRangePicker
        predefinedRanges={[
          { label: 'Last 7 Days', days: 7 },
          { label: 'Last 30 Days', days: 30 }
        ]}
    />
    </div>
  )
}

export default App
