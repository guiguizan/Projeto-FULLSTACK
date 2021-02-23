import React, {useState} from 'react';
import * as S from './styles';


import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Filtro from '../../components/Filtro'



function Home() {

    const [filterActived, setFilterActived] = useState();
    return (
        
        <S.Container>
            <Header/>

            <S.FilterArea>
                <button type='button' onClick={() => setFilterActived("all")} >
                    <Filtro title="Todos" actived={filterActived == 'all'} />
                </button>

                <button type='button' onClick={() => setFilterActived("today")}>
                    <Filtro title="Hoje" actived={filterActived == 'today'} />
                </button>

                <button type='button' onClick={() => setFilterActived("week")}>
                    <Filtro title="Semana" actived={filterActived == 'week'} />
                </button>

                <button type='button' onClick={() => setFilterActived("month")}>
                    <Filtro title="Mês" actived={filterActived == 'month'} />
                </button>

                <button type='button' onClick={() => setFilterActived("year")}>
                    <Filtro title="Ano" actived={filterActived == 'year'} />
                </button>
            </S.FilterArea>
            <h1>oi</h1>
            
            <Footer/>
            
        </S.Container>
    
    )
   
}

export default Home;
