import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado.js';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    //Si el resultado cambia (segundo argumento, o sea [counter]), se necesita una nueva version memorizada del resultado 
    //de esa funcion (o sea, el primer argumento que es un callback).
    //Funciona de una manera similar al useEffect, ya que se ejecutara la funcion solo en caso de que el segundo argumento
    //sea modificado, y en caso de no serlo y mantener las mismas propiedades, simplemente lo "memoriza"
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]); //El valor retornado por el useMemo, que es almacenado en
    //memoProcesoPesado, es el valor que usaremos en el codigo

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>
                Counter: <small>{counter}</small>
            </h3>
            <hr />

            {/* El parrafo escrito debajo es sustituido de la siguiente manera */}
            {/* <p>{procesoPesado(counter)}</p>   -   Anterior */} 
            <p>{memoProcesoPesado}</p>   {/* Nuevo usando el valor del useMemo */}

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
