/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";

const InitialCounter = ({ onRemove, id }) => {
  const [view, setView] = useState(false);
  const [initialValue, setInitialValue] = useState(0);

  const handleView = () => {
    setView(true);
  };

  const handleSetValue = (event) => {
    event.preventDefault();
    const value = event.target.value.value;
    setInitialValue(parseInt(value));
    setView(false);
  };

  const handleIncrement = () => {
    setInitialValue(initialValue + 1);
  };

  const handleDecrement = () => {
    if (initialValue === 0) {
      return;
    } else {
      setInitialValue(initialValue - 1);
    }
  };

  const handleClear = () => {
    setInitialValue(0);
  };

  const handleRemoveClick = () => {
    onRemove();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[260px] mx-auto bg-neutral-400 rounded-xl relative">
        <button onClick={handleRemoveClick} className="absolute top-2 left-2">
          <FaCircleXmark />
        </button>
        <div className="px-5 py-10 flex flex-col items-center justify-center">
          <div className="bg-white w-60 h-10 flex flex-row items-center justify-end px-2">
            {initialValue}
          </div>
          <button
            onClick={handleIncrement}
            className="bg-neutral-700 hover:bg-neutral-600 p-2 w-full text-white mt-5 rounded-md"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-neutral-700 hover:bg-neutral-600 p-2 w-full text-white mt-5 rounded-md"
          >
            Decrement
          </button>
          {!view ? (
            <button
              onClick={handleView}
              className="bg-neutral-700 hover:bg-neutral-600 p-2 w-full text-white mt-5 rounded-md"
            >
              Set Value
            </button>
          ) : (
            <form
              onSubmit={handleSetValue}
              className="w-full mt-5 flex flex-grow"
            >
              <input
                name="value"
                className="rounded-s-md outline-0 px-2"
                type="text"
                required
              />
              <button className="bg-neutral-700 hover:bg-neutral-600 px-3 py-2 rounded-e-md text-white">
                Set
              </button>
            </form>
          )}

          <button
            onClick={handleClear}
            className="bg-neutral-700 hover:bg-neutral-600 p-2 w-full text-white mt-5 rounded-md"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialCounter;
