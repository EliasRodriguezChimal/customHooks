import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    //Cada vez que el URL de abajo cambia, se vuelve a realizar la peticion y se carga un nuevo quote
    //mediante la logica escrita en el useFetch.
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
      console.log(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p ref={pTag}> {quote} </p>
            </blockquote>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>
        </div>
    )
}
