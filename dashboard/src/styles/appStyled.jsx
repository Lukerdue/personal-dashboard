import React from 'react';
import styled from 'styled-components';

export const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    color: #ededed;
    .main{
        padding: 0 100px;
    }

    .row{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .controls svg{
        padding: 0 15px;
        height: 1.15em;
    }

    @media only screen and (max-width: 800px){
        .row{
            flex-direction: column;
        }
    }
    @media only screen and (max-width: 550px){
        .main{
            padding: 0 30px;
        }
    }
`