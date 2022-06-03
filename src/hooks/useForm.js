import { useState } from "react";

//Este hook se encarga de controlar y actualizar los cambios en un input de un form
//gracias al useState (para modificar el valor) y la funcion handleInputChange, que sirve
//para matchearlo con el campo correspondiente dentro del formulario.

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}