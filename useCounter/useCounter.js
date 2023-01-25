import { useState } from "react"

 const UseCounter = ( initValue = 1 ) => {

    const [counter, setCounter] = useState(initValue)

    const counterAdd = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const counterBorrar = (value) => {
        if ( counter === 1 ) return; 
        setCounter( counter - value );
    }

    const counterReset = () => {
        setCounter(initValue)
    }

    return {
        counter,
        counterAdd,
        counterBorrar,
        counterReset,
    }
  
}

export {
    UseCounter
}
