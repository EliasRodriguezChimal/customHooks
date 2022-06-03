import React from 'react';
import { shallow } from 'enzyme';
import { TodosList } from '../../../components/08-useReducer/TodosList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('<TodoList /> tests', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodosList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have 2 <TodoListItem />', () => { 
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
    });
})