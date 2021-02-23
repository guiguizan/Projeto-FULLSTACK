import React from 'react';
import * as S from './styles';

import logo from '../../imagens/logo.jpeg';
import sino from '../../imagens/sino.png';

function Header() {

    return(
       
    <S.Container>
        <S.LadoEsquerdo>
            <img src={logo} alt="logo" />
        </S.LadoEsquerdo>
        <S.LadoDireito>
            <a href="#">INÍCIO</a>
            <a href="#">NOVA TAREFA</a>
            <a href="#">SINCRONIZAR CELULAR</a>
            
            <a href="#" id="notification">
                <img src= {sino} alt="Notificacao" />
                <span>5</span>
            </a>


        </S.LadoDireito>


           

        
    </S.Container>
)

}

export default Header;
