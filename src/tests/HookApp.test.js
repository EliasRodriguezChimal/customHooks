import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Test over <HookApp />', () => {
    test('Should match HookApp with snapshot', () => {
        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
    })
})