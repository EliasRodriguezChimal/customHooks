import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        //Esta funcion se ejecuta en cuanto se presiona el boton del formulario ya
        //que usa la funcion handleSubmit.
        e.preventDefault();

        //Las siguientes lineas sirven para hacer una comprobacion y evitar que se agreguen
        //lineas vacias como items de la lista
        if (description.trim().length <= 1) {
            return;
        }

         //Creamos un nuevo TODO
         const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        //Disparamos la action mediante el dispatch con el reducer correspondiente
        handleAddTodo(newTodo);
        reset();
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form
                className="d-grid gap-3"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
