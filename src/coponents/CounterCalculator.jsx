import { useState } from "react";
import InitialCounter from "./InitialCounter";

function CounterCalculator() {
  const [calculators, setCalculators] = useState([<InitialCounter key={0} />]);

  // Counter Duplicator handler
  const handleDuplicate = () => {
    const newCalculator = <InitialCounter key={calculators.length} />;
    setCalculators([...calculators, newCalculator]);
  };

  // Remove Duplicate Counter Handler
  const handleRemove = (index) => {
    const newCalculators = [...calculators];
    newCalculators.splice(index, 1);
    setCalculators(newCalculators);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDuplicate}
        className="bg-neutral-600 hover:bg-neutral-500 text-white px-4 py-2 rounded-lg"
      >
        Add Calculator
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {calculators.map((calculator, index) => (
          <div key={index}>
            <InitialCounter key={index} onRemove={() => handleRemove(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CounterCalculator;
