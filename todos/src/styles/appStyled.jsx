import React from 'react';
import styled from 'styled-components';

export const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    .main{
        padding: 0 100px;
    }
    .controls{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .controls svg{
        padding: 0 15px;
        height: 1.15em;
    }
`