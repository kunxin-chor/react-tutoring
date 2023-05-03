
// hooks are essentially a method in react that allows us to add new functionalities to 
// a react component as opposed to using inheritances in OOP

import { useState } from 'react';

function App() {

  // create a state variable in a React component
  const [counter, setCounter] = useState(0);   // the first argument to the useState function is the initial value of the state
  // it returns two return values, the first is the current value of the counter
  // the second is a function that can be used to set the value in the counter

  const [name, setName] = useState("Tan Ah Kow");

  console.log("renders");
  const increment = () => {
    // Whenever a state variable changes, the component re-renders (ie. the function is called again)
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Welcome, {name}</h1>
      <div style={{ margin: "20px", height: "100px", width: "150px", border: "1px solid black" }}>
        {counter}
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={() => {
            setCounter(0)
          }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
