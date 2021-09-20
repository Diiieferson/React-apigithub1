import React, { useEffect, useState } from 'react';
import * as S from './styled'

export default function Avatar(){
    const [fotos, setFotos ] = useState([])
    useEffect(()=> {
        let fotosValue = localStorage.getItem('avatar')
        setFotos(fotosValue)

        localStorage.clear()

    },[])

    return(
        <S.Container>
            <S.image src={fotos} />
        </S.Container>
    )
}