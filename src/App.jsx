import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementNumber } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNumber] = useState();

  return (
    <div className="h-screen flex justify-center items-center bg-amber-200">
      <div className="bg-emerald-600 h-120 w-120 flex justify-center items-center flex-col gap-3">
        <div className="flex gap-4">
          <button
            className="bg-amber-600 w-18 h-8 rounded-sm cursor-pointer hover:bg-red-700 hover:ring-2 hover:ring-amber-800 text-amber-50 text-2xl"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="font-medium font-serif text-amber-50 text-2xl">
            {count}
          </span>
          <button
            className="bg-amber-600 w-18 h-8 rounded-sm cursor-pointer hover:bg-red-700 hover:ring-2 hover:ring-amber-800 text-amber-50 text-2xl"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <input
          type="number"
          className="bg-blue-300 p-2 no-spinner"
          placeholder="Enter number to add"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="bg-amber-600 w-18 h-8 rounded-sm cursor-pointer hover:bg-red-700 hover:ring-2 hover:ring-amber-800 text-amber-50"
          onClick={() => dispatch(incrementNumber(+number))}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default App;
