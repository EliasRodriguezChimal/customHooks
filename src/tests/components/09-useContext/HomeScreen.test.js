import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('<HomeScreen /> tests', () => {
    const user = {
        name: 'EliasUwU',
        email: 'elias@example.com'
    };

    const wrapper = mount(    //Shallow does a render only of the main component (in this case, UserContext)
    //while 'mount' is able to render all the components
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})