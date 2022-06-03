import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('<TodoListItem /> tests', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[1]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleDelete function', () => {
        wrapper.find('.btn-danger').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('should call handleToggle function', () => {
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('should display text correctly', () => {
        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[1].desc}`)
    });

    test('should have class complete if todo.done = true', () => { 
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
})