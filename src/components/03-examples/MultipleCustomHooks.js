import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    //Cada vez que el URL de abajo cambia, se vuelve a realizar la peticion y se carga un nuevo quote
    //mediante la logica escrita en el useFetch.
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                    :
                    (
                        // NOTA: En Bootstrap ya no es valido "text-right" para alinear el texto a la derecha,
                        // ahora se usa "text-end".
                        <>
                            <blockquote className="blockquote text-end">
                                <p className="mb-0"> {quote} </p>
                                <footer className="blockquote-footer"> {author} </footer>
                            </blockquote>

                            <button
                                className="btn btn-primary"
                                onClick={increment}
                            >
                                Next quote
                            </button>
                        </>
                    )
            }

        </div>
    )
}
