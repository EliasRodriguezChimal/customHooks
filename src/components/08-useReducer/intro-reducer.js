const initialState = [{
    id: 1,
    todo: 'Comprar awa',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    //Esta funcion SIEMPRE tiene que resolverse sin disparar efectos secundarios, es decir,
    //debe resolverse con el state y el action que ha recibido, sin usar funciones externas
    //ni nada mas.

    //Aqui es donde debe agregarse el nuevo TODO
    if(action?.type === 'add'){
        //Aqui NO usamos push, en vez de eso, retornamos el nuevo estado gracias al operador
        //spread y agregando el payload contenido en action.
        return [...state, action.payload];
    }

    return state;   //Siempre debe retornarse un estado, aun si no se hizo ninguna operacion.
}

let todos = todoReducer();

//NOTA: Nunca usar push() en React porque modifica o muta el objeto.

const newTodo = {
    id: 2,
    todo: 'Comprar panecito',
    done: false
}

const agregatTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, agregatTodoAction);

console.log(todos);