import React, { memo } from 'react'

//El uso de 'memo' permite memorizar un componente, haciendo que solo se vuelva a 
//ejecutar o renderizar en el caso de que las properties de este mismo componente cambien
export const Small = memo(({ value }) => {
    console.log('Me volvi a llamar UwU');
    return (
        <small> {value} </small>
    )
})
