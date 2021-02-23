import styled from 'styled-components';

export const Container = styled.div`
    
    width: 260px;
    height:60px;
    background: #282c30;
    border-radius: 10px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;


    img{
        color:white;
        padding-left: 20px;
        padding-top: 10px;
        width: 35px;
        height: 35px;
    }

    span{
        color:white;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
        
    }

    &:hover{
        background: yellow;
    }

`