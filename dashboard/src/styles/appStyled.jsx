import React from 'react';
import styled from 'styled-components';

export const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    color: #ededed;
    .main{
        padding: 0 100px;
    }

    .controls svg{
        padding: 0 15px;
        height: 1.15em;
    }
    @media only screen and (max-width: 550px){
        .main{
            padding: 0 30px;
        }
    }
`