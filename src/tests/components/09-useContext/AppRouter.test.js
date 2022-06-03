import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('<AppRouter /> tests', () => {
    const user = {
        id: 4,
        name: 'Francisco'
    }
    const wrapper = mount(
        <UserContext.Provider value={{ user }} >
            <AppRouter />
        </UserContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})