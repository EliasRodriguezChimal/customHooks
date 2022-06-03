//NOTA: Una aplicacion puede tener mas de un Router.

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">
                    {/* La version 6 de react-router-dom cambio 'Switch' por 'Routes' */}
                    <Routes>
                        {/* La variable 'path' determina el valor que debe tener la URL para renderizar en pantalla el
                    componente determinado por la variable 'element'. 'element' debe tener un valor igual a un componente,
                    como se puede observar abajo, incluyendo los simbolos '<  />' */}
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/about" element={<AboutScreen />} />
                        <Route exact path="/login" element={<LoginScreen />} />

                        {/* La propiedad 'exact' escrita arriba, le indica al codigo que la ruta debe ser exactamente igual a la
                    descrita en la variable 'path' para renderizar el componente descrito en 'element', ya que de no hacerse 
                    asi y ubicar, por ejemplo, en primer lugar el path="/" y abajo los demas, aunque nos encontremos en /login, 
                    se renderizara el componente HomeScreen ya que es el primero que se encontro que coincidiera (con su '/')
                    aunque no sea exactamente igual. */}

                        {/* La siguiente ruta (Route) es usada como el 'default' de un Switch, para ejecutarse cuando el valor del path
                    no haya coincidido con ningun otro valor (que no exista dicho path) */}
                        <Route path="*" element={<HomeScreen />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
