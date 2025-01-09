import { useState } from "react";
import { Button } from "@/components/ui/button";

const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    count === 0 ? null : setCount(count - 1);
  }

  return (
    <div id="container" className="flex justify-center items-center h-screen">
      <div className="size-2/3 bg-zinc-900 rounded-xl shadow-xl flex justify-center items-center gap-10">
        <Button variant="destructive" onClick={decrement}>
          MINUS -
        </Button>
        <h1 className="text-white text-5xl font-bold">{count}</h1>
        <Button
          variant="destructive"
          onClick={increment}
          className="bg-green-600 hover:bg-green-700"
        >
          PLUS +
        </Button>
      </div>
    </div>
  );
};

export default App;
