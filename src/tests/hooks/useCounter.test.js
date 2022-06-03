import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Tests over useCounter', () => {
    test('Should return default values', () => {
        //El metodo renderHook nos permite renderizar o ejecutar el hook. Esta funcion 
        //recibe un callback como parametro, donde pondremos el hook que queremos evaluar
        const { result } = renderHook(()=> useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Expect should have same value as the value provided for useCounter', () => {
        const { result } = renderHook(()=> useCounter(100));

        expect(result.current.counter).toBe(100);
    });

    test('increment function should work to increase value of counter in 1', () => {
        const { result } = renderHook(()=> useCounter(100));
        const {increment} = result.current;

        //When you want to realize actions over the hook, you need to use 'act()' function (from 
        //testig library) to execute actions (in this case, 'increment' function is an action and
        //couldn't be called as increment() without being inside act)
        act(() => {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(101);
    });

    test('decrement function should work to decrease value of counter in 1', () => {
        const { result } = renderHook(()=> useCounter(100));
        const {decrement} = result.current;

        act(() => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(99);
    });

    test('reset function should return value of counter to its initial value', () => {
        const { result } = renderHook(()=> useCounter(100));
        const {increment,reset} = result.current;

        act(() => {
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100);
    });
})