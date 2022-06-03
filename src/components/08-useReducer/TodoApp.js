import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodosList } from './TodosList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

//La funcion 'init' se llama dentro del reducer, y todo lo que retorne sera considerado el
//initialState del mismo reducer.

//En este caso, la funcion init incluye el almacenamiento de datos persistente gracias a 
//Local Storage, permitiendo asi que, aunque se recargue el navegador, no se pierdan los datos.
const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React UwU',
    //     done: false
    // }];

    //Para recuperar los TODOs del Local Storage, usamos la instruccion inferior, la cual nos permite
    //convertir la string guardada previamente a un objeto, y en caso de que no exista nada (que el 
    //Local Storage este vacio), la funcion JSON.parse() devolvera 'null', y para eso se usa el OR ( || )
    //que se ve abajo, el cual nos permitira devolver un arreglo vacio en caso de que dicha instruccion haya
    //retornado null.
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //El 'dispatch' es una funcion a la cual se le envia una accion y sabra
    //que reducer le corresponde y que debe redibujar.
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //El siguiente efecto nos permite guardar los TODOs, cada vez que sean modificados, en el 
    //local storage para evitar que se pierdan al recargar el navegador.

    //NOTA: El local storage SOLAMENTE ALMACENA STRINGS, NO OBJETOS, por lo que tenemos que pasar los
    //objetos por la funcion JSON.stringify() para convertir el objeto en un json que sera un string.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    //Funcion para agregar un TODO a la lista
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    //Funcion para eliminar un TODO de la lista
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    //Funcion para cambiar el valor 'done' de un TODO de la lista
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodosList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
