import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [savedCount, setSavedCount] = useState([]);

  function AddME() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function ReMoveMe() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  function Delete() {
    setCounter(0);
  }

  function DeleteAll() {
    setSavedCount([]);
  }

  const resetCount = () => {
    setCounter(0);
  };

  const saveCount = () => {
    setSavedCount([
      ...savedCount,
      {
        id: savedCount.length,
        value: counter,
      },
    ]);
    resetCount();
  };

  return (
    <>
      <h1 style={{ fontFamily: "arial" }}>React Course with Hitesh</h1>
      <h2>Counter Value {counter} </h2>
      <button onClick={AddME}>Add Value</button>{" "}
      <button onClick={ReMoveMe}>Remove Value</button>{" "}
      <button onClick={saveCount}>Save</button>
      <br />
      <br />
      <button onClick={Delete}>Delete</button>{" "}
      <button onClick={DeleteAll}>Delete All</button>
      <h2>Footer: {counter}</h2>
      <ul>
        {savedCount.map((count) => {
          return <li key={count.id}>{count.value}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
