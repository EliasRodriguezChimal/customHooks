import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Tests over useFetch hook', () => {
    test('should return data by default', () => {
        const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('should have wished data', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('should handle error in useFetch', async() => { 
        //The URL below has an intentional error to trigger error exception for this test. 
        //Error: the 'apid' part of the URL should be 'api' only.
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la informacion');
    });
})