import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';

describe('<TodoApp /> tests', () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => { });

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add a new todo', () => {
        const wrapper = mount(<TodoApp />) //mount is used when you want to test ALL the app in general 

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete corresponding Todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodosList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
})