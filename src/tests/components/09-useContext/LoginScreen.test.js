import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('<LoginScreen /> test', () => {
    const setUser = jest.fn();
    const wrapper = mount(//the property passed should be ALWAYS 'value' = 'the value needed for the component'
    //and has to be passed with double '{' like below.
        <UserContext.Provider value={{setUser}}> 
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute setUser with the expected argument', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Elias'
        });
    });
})