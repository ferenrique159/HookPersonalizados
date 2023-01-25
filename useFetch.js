import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        onError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data,
            isLoadin: false,
            onError: null
        })
    }

    useEffect(() => {
      getFetch()     
    }, [url])
    
    return{
        data:      state.data,
        isLoading: state.isLoading,
        onError:   state.onError
    };
}

export {
    useFetch
}