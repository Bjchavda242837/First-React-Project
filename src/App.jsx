import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <CountIncreaseComp /> 

      <CountTimerComp />

      <TabEffect />
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

function TabEffect() {

  const [tab, setTab] = useState(1)
  const [tabData, setTabData] = useState({})
  

  useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/todos/" + tab)
    .then(async res => {
      const json = await res.json();
      setTabData(json)
    })
  })

  return <div>
    <button onClick={()=> {
      setTab(1)
    }} 
    style={{color: tab == 1 ? "red" : "black"}}>Tab-1
    </button>

     <button onClick={()=> {
      setTab(2)
    }} 
    style={{color: tab == 2 ? "red" : "black"}}>Tab-2
    </button>

     <button onClick={()=> {
      setTab(3)
    }} 
    style={{color: tab == 3 ? "red" : "black"}}>Tab-3
    </button>

     <button onClick={()=> {
      setTab(4)
    }} 
    style={{color: tab == 4 ? "red" : "black"}}>Tab-4
    </button>

    <br />

    {tabData.title}

    

  </div>
}



export default App;
