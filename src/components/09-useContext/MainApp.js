import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    const [user, setUser] = useState({});

    //El UserContext nos servira para usar el valor pasado como parametro (en este caso 'user' y 'setUser') si y solo si
    //el componente que intenta usarlo se ubica dentro del UserContext.Provider
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter />
        </UserContext.Provider>
    )
}
