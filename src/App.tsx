import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { supabase } from "./createClient";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("World");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    count === 0 ? null : setCount(count - 1);
  }

<<<<<<< HEAD
  console.log("Hello, Mark!");
  console.log("Hello, Jesreal!");

=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleUpload = async () => {
    const { error } = await supabase.from("counterData").upsert(
      {
        count: count,
        name: name,
      },
      { onConflict: "name" }
    );

    if (error) {
      console.error("Error inserting data", error);
    }

    alert("Data inserted successfully");
  };

  const handleRetrieve = async () => {
    const { data, error } = await supabase
      .from("counterData")
      .select("*")
      .eq("name", name);

    if (error) {
      console.error("Error retrieving data", error);
    }

    if (data?.length === 0) {
      alert("No data found");
      return;
    }

    setCount(data?.[0]?.count);
    alert("Data retrieved successfully");
  };
>>>>>>> 9357ae2c8da8476552156e82998a5543545f29df
  return (
    <div id="container" className="flex justify-center items-center h-screen">
      <div className="size-2/3 bg-zinc-900 rounded-xl shadow-xl flex justify-center items-center gap-10 flex-col">
        <h1 className="text-white text-4xl font-bold">Hello, {name} </h1>
        <div className="flex flex-row  gap-10">
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
        <Input
          onChange={handleChange}
          placeholder="Please input your name"
        ></Input>
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={handleUpload}
        >
          Submit
        </Button>
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={handleRetrieve}
        >
          Retrieve
        </Button>
      </div>
    </div>
  );
};

export default App;
