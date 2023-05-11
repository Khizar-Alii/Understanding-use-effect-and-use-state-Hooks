import React, { useState, useEffect } from "react";
import "./Counter.css";
import {useCount} from './useCount'

function Counter() {
  //also we can pass desired dependency instead of [empty array] so whenever this dependency change call useeffect

  //  useEffect (()=>{
  //     console.log('Inside Use Effect');
  //  },[]) //Hook will call only once when component mount  //similar to component did mount

  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  // const handleReset = () => {
  //   setCount(0);
  // };
  const [handleClick , handleReset ,state ] = useCount() // custom Hook
  useEffect(() => {
    console.log("Inside Use Effect");
  }, []); // Hook will call again and again whenever the component rerender //state update means component rerender //similar to component did update

  return (
    <div className="counter">
      <div id="counterComponent">
        <button id="myButton" onClick={handleClick}>
          Click Me
        </button>
        <button id="resetButton" onClick={handleReset}>
          Reset
        </button>
        <p id="count">{state}</p>
      </div>
    </div>
  );
}

export default Counter;
