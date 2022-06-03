import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {    //Tenemos que usar memo para memorizar el valor
    //de esta funcion y evitar generar nuevamente el componente si no se ha cambiado el valor de las propiedades

    console.log('Se volvio a generar UnU');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                //Si quisieramos enviar un numero para que el incremento se realiza con ese 'num' en vez de 1 en 1,
                //cambiariamos el increment() de abajo por el sig. codigo:      increment( num ) 
                //y lo recibiriamos en el useCallback.
                increment();
            }}
        >
            Incrementar
        </button>
    )
})
