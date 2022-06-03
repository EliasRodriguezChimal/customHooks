import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Tests over useForm', () => {
    const initialForm = {
        name: 'Elias',
        email: 'elias@example.com'
    };

    test('Should return a form by default', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Should change form value (change name value for something else)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Francisco'
                }
            });
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm ,name: 'Francisco'});
    });

    test('Should reset form with reset function (change form values first)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Francisco'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
})