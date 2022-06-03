import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    //Se puede ajustar el incremento para que use un valor distinto 'num', el cual podemos recibir en las props
    //del callback de la sig. manera:
    //      const increment = ( num ) => {}
    //y usarlo de la sig. manera al sumar:
    //      setCounter(counter => counter + num).

    const increment = useCallback(() => {
        setCounter(counter => counter + 1) //Si usamos la forma setCounter(counter + 1), al presionar el boton
        //de incrementar, el incremento no sera realizado ya que eliminamos la dependencia a la variable counter
        //y no se esta haciendo referencia a dicha dependencia en el arreglo.
        //En cambio, si usamos la forma setCounter(counter => counter + 1), esta ya incluye la referencia al valor
        //anterior, ademas de eliminar la dependencia para evitar que el componente se vuelva a generar.
    }, [setCounter])


    //SEGUNDO USO
    //Es recomendado usar el useCallback cuando se esta pasando como dependencia una funcion a un useEffect, como
    //en el siguiente ejemplo:

    useEffect(() => {
        //Algun proceso X
        
    }, [increment]) //Como podemos observar, la dependencia es la misma funcion increment, y al usar un useCallback,
    //esta no disparara el useEffect al construirse nuevamente la funcion, en cambio, sin el useCallback, si lo haria,
    //y eso podria causar problemas o consumo de memoria innecesario.
    


    return (
        <div>
            <h1> useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
