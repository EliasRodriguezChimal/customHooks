import React, { useEffect } from 'react';

export const Message = () => {

    //RECORDATORIO: Siempre que se use useEffect, recuerda hacer la limpieza
    //en el callback del return (fase de lipieza) ya que podria causar 
    //problemas porque se use una cantidad de memoria excesiva, como en
    //el siguiente ejemplo (NO PROBARLO, DEJARLO COMO COMENTARIO):

    //  useEffect ()=> {
    //      window.addEventListener('mousemove',(e)=>{
    //          console.log('>:D');
    //      });
    
    //      return () => {
    //          console.log('No hago limpieza uwu');
    //      }
    //  }, [])


    //La manera CORRECTA DE HACER LIMPIEZA en el ejemplo anterior, seria de
    //la siguiente manera:

    //  useEffect ()=> {

    //      const mouseMove(e) => {
    //          console.log('>:D');
    //      }

    //      window.addEventListener('mousemove', mouseMove);
    
    //      return () => {
    //          console.log('AHORA SI hago limpieza uwu');
    //          window.removeEventListener('mousemove', mouseMove);
    //      }
    //  }, [])

    //El removeEventListener remueve la referencia a la funcion mouseMove,
    //evitando asi que se duplique la impresion por consola.

    useEffect(() => {
        //Cuerpo del efecto 
        console.log('componente montado');
    
        return () => {
            //Fase de limpieza
            console.log('componente desmontado');
        }
    }, [])
    

    return (
        <div>
            <h1>Eres la vrga uwu</h1>
        </div>
    )
}
