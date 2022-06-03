import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    //TAREA

    //1. Obtener la referenia al Context
    //2. Extraer el setUser del Context
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => { setUser({
                    id: 123,
                    name: 'Elias'
                }) }}
            >
                Login
            </button>
        </div>
    )
}
