import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    //El uso de un hook dentro de un condicional es una MALA PRACTICA y React
    //lo detecta como un error. Un ejemplo de dicha mala practica es el
    //siguiente fragmento de codigo comentado:

    //  if(true){
    //      const [state, setState] = useState(0);
    //  }
    const [formState, setFormState] = useState({
        name: '',
        email: ''   
    })

    const {name, email} = formState;

    //El useEffect sirve para escuchar cambios especificos dentro de nuestra
    //aplicacion. Esto se puede observar mejor con los mensajes en consola
    //usando los 3 useEffect que estan escritos abajo.

    useEffect(() => {
        // console.log('uwu');
    }, []);

    useEffect(() => {
        // console.log('formState modificado');
    }, [formState]);

    useEffect(() => {
        // console.log('correo cambio');
    }, [email]);

    //El mismo React recomienda usar un useEffect individual por cada elemento del que
    //queramos estar pendientes. Por eso, en los ejemplos de arriba, usamos 3 useEffect
    //distintos, uno para la primera vez que se renderiza el componente, uno para cada
    //vez que cambie el formState, y otro para cada vez que sea modificado el email.

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name" 
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email" 
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name==='123') && <Message />}

        </>
    )
}
