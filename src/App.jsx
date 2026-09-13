import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <CountIncreaseComp />

      <CountTimerComp />
    </div>
  );
}

// timer component
function CountTimerComp() {
  // State variable = useState hook
  const [count, setCount] = useState(0);

  // State varible update function
  function increaseCount() {
    console.log("inside of setInterval function");
    setCount((prev) => prev + 1);
  }

  // useEffect Hook used for setInterval because i have to run only once when app mount for the first time.
  useEffect(() => {
    console.log("inside of useEffects");
    // setInterval defined and create a variable for clearInterval.
    const timer = setInterval(increaseCount, 1000);

    // timer cleanup in useEffect hook.
    return () => {
      clearInterval(timer);
    };
  }, []);

  // html Div with p tag and count variable in return for rendering
  return (
    <div
      style={{
        border: "1px solid black",
        margin: 10,
        width: 200,
      }}
    >
      <p> {count} timer</p>
    </div>
  );
}

// button click increase counter component.
function CountIncreaseComp() {
  // State variable = useState hook.
  const [count, setCount] = useState(0);

  // function for increase count on onclick.
  function IncreaseCountClick() {
    // state variable is update here via setCount function.
    setCount(count + 1);
  }

  // html Div with p tag and count variable in return for rendering
  return (
    <div style={{ border: "1px solid black", margin: 10, width: 200 }}>
      <p> {count} </p>
      <button onClick={IncreaseCountClick}>Increase</button>
    </div>
  );
}

export default App;
