import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('todoReducer tests', () => {
    test('should return default state', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('should add a new TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender NodeJS',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer(demoTodos, action);

        expect(state).toEqual([...demoTodos, newTodo]);
        expect(state.length).toBe(3);
    });

    test('should delete the specified TODO', () => {
        const action = {
            type: 'delete',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
    });

    test('should display line through (do the toggle) in the corresponding TODO', () => {
        const action = {
            type: 'toggle',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);
        
        expect(state[1].done).toBe(!demoTodos[1].done);
    });
})