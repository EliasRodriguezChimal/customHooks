import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('<RealExampleRef /> tests', () => { 
    const wrapper = shallow(<RealExampleRef />);

    test('should be displayed correctly', () => { 

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('should show <MultipleCustomHooks /> component', () => { 
        //Next line allow us to simulate click on button
        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
 })