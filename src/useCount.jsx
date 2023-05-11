import React, { useState} from "react";
export const useCount = (intialValue = 0) =>{
  const [state, setState] = useState(intialValue);
  const handleClick = () =>{
    setState(state + 1)
  }
  const handleReset = () =>{
    setState(0)
  }
  return [handleClick , handleReset , state]
}