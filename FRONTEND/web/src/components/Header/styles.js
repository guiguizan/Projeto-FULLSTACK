import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height:80px;
    background: #282c30;
    border-bottom: 6px solid black;
    display:flex;

`

export const LadoEsquerdo = styled.div` 

    width: 50%;
    height:90px;
    display:flex;
    align-items:center;
    padding-left: 20px;

    img{
        margin-bottom: 7px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }


`

export const LadoDireito = styled.div`
    margin-left:50%
    width: 50%;
    height:90px;
    display:flex;
    align-items: center;
    justify-contet: flex-end;
    position:fixed;
    right: 0px;
  
    
    a{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 15px;
        
        &:hover{
            color:black;
        }
    }

    #notification{
        img{
            heigth: 50px;
            width: 30px;
            border-radius: 50%;
          
        }
        
        

    }

`


