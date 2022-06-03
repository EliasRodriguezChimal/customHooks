export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload); 
            //filter() retorna un nuevo arreglo con los elementos que cumplan cierta condicion

        //Forma corta del toggle.
        case 'toggle':
            return state.map(todo => 
                (todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
            )

        //Forma larga de realizar el toggle.
        case 'toggle-old':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
    
        default:
            return state;
    }
}