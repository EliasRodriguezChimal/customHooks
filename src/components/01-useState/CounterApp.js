import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const {counter1, counter2} = state;
  //Desestructuracion para que no cause errores en los h1 de abajo.

  return (
    <>
        {/* <h1>CounterApp {counter}</h1> */}
        <h1>Counter1 {counter1}</h1>
        <h1>Counter2 {counter2}</h1>
        <hr/>

        <button className="btn btn-primary"
          onClick={() => {
            setState({
              ...state, //El operador spread nos sirve en este caso para
                        //mantener o copiar el estado anterior de nuestro state y
                        //asi evitar tener que escribirlo todo de nuevo, 
                        //mientras que la linea de abajo nos permite establecer
                        //el nuevo valor de la variable que queremos cambiar.
              counter1: counter1 + 1
            });
          }}
        >
            +1
        </button>
    </>
  )
}
