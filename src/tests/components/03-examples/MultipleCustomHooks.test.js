import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');   //This means that we don't care about the functioning of useFetch, 
//we only care about the results of this hook. The mock function with that path means that we're not using
//the useFetch located inside that file, we're using a 'fake' one instead and avoid calls to the original
//file.

describe('Tests over <MultipleCustomHooks />', () => {
    test('should be displayed correctly', () => {
        useFetch.mockReturnValue({  //This just returns the object written as a 'result' from the fake useFetch
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should display data', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Elias',
                quote: 'UwU Chanclitas'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);    //This just means that nothing with the 'alert' classname should
        //exists in the html snapshot
        expect(wrapper.find('.mb-0').text().trim()).toBe('UwU Chanclitas'); //When you use 'find' function with a classname, this should
        //be written as '.classname', but when you are using find() with tags, this should be written as 'footer'
        expect(wrapper.find('footer').text().trim()).toBe('Elias');
    });
})