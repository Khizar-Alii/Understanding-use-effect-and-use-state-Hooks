import { useState , useEffect } from "react";
export const useWindowWidth = (intialValue = window.innerWidth) =>{
    const [state,setState] = useState(intialValue)
    function handleWidth(){
        setState(window.innerWidth)
    }

    return [state , handleWidth]
}