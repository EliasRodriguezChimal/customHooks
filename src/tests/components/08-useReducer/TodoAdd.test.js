import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('<TodoAdd /> tests', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should NOT call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit'); //This returns a function

        formSubmit({ preventDefault() { } });   //handleSubmit (function located inside TodoAdd component)
        //needs an argument ('e', which is the event that uses 'preventDefault' function), so we will have to pass it
        //as an argument like in the code line above. If we don't pass it, it will show an error like "cannot read 
        //property 'preventDefault' of undefined". 

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('should call handleAddTodo function with one argument', () => {
        const value = 'Aprender Python';
        wrapper.find('input').simulate('change', {
            target: {
                value: value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit'); 

        formSubmit({ preventDefault() { } }); 
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
})

