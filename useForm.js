import { useState } from "react";

const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm );
    
      // se desestructura el "event.target" se llama nada mas a "target" y se coloca los valores a cambiar
      const onInputChange = ({target}) => {
        const { name, value } = target;
          setFormState({
            ...formState,
            [ name ] : value
          })
      }

      const onResetForm = () => {
        setFormState(initialForm);
      }

    return {
      ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}

export{
    useForm
}
