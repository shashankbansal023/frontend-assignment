
import { IPreDefinedRanges } from "../interface";

const PreDefinedRanges = ({predefinedRanges = [] , handlePredefinedRange} : IPreDefinedRanges) => {

    return (
    <>
        {predefinedRanges.length > 0 && (
            <div className="predefined-ranges">
            {predefinedRanges.map((range) => (
                <button
                key={range.label}
                onClick={() => handlePredefinedRange(range.days)}
                >
                {range.label}
                </button>
            ))}
            </div>
        )}
    </>
    )
}

export default PreDefinedRanges;