import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const handeIncrement = () => {
        setCount(count+1);
  };

  return (
    <div>
      <h1>Sate</h1>
      <p>Number: {count}</p>

      <button
        onClick={handeIncrement}
        type="button"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Increment
      </button>
    </div>
  );
}
