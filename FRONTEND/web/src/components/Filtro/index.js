import React from 'react';
import * as S from './styles';

import filtro from '../../imagens/filtro.png';


function Filtro({title, actived}) {

    return(
       
    <S.Container actived>
        <img src={filtro} alt="Filtro" />

        <span> {title} </span>
        
    </S.Container>
)

}

export default Filtro;
