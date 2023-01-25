import React, { useEffect, useReducer } from 'react'
import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
}]

// evento que nos ayuda a renderizar los valores de los todos en el localStorage
const init = () => {
    // el final del '|| []' es para el caso que sea null o no tenga informacion en el localStorage
    return JSON.parse( localStorage.getItem('todos') ) || [];
    
}

const useTodos = () => {
    
    // este hook es para aplicaciones pequeñas donde no hay componentes mas alla de un nieto, ya que este tipo de hook tiene que ser llamado o desestructurado en cada component realizado a pesar de no ser utilizado sino con puente para llegar al necesario, por eso el useReducer uno mas directo para aplicaciones mas grandes seria el useContext
    const [todos, dispatchTodo] = useReducer( todoReducer, initialState, init);

    // proceso para comenzar a realizar el efecto de guardar en el localStorage
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos )  )
    }, [todos])
    
    // Estas variable creadas son las que disparan el dispatch del useReducer para que el localStorage agregue o elimine, sea la condicion deseada
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo( action );
        
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo( {
            type: '[TODO] remove todo',
            payload: id
         } );
        
    }
    const handleToggleTodo = (id) => {
        dispatchTodo( {
            type: '[TODO] Toggle todo',
            payload: id
         } );
        
    }

    const todosCount = todos.length;
    const todosDone = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        todosDone
  }
}

export{
    useTodos
}
