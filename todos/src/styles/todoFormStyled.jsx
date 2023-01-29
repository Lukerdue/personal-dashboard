import React from 'react';
import styled from 'styled-components';

export const TodoFormStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-bottom: 1px solid #f09;
    margin-bottom: 2px;

    @keyframes borderfade {
        0%{
            border-bottom: 2px solid #adadad;
        }
        100%{
            border-bottom: 2px solid #f09;
        }
    }
    input[type=text]{
        padding: 5px;
        border: none;
        border-bottom: 2px solid #adadad;
        background-color: transparent;
        color: #ededed;
    }
    input[type=text]:focus{
        animation: borderfade .5s ease-in-out;
        animation-fill-mode: forwards;
    }
    .input-blur{
        animation: borderfade .5s ease-in-out;
        animation-direction: reverse;
        animation-fill-mode: forwards;
    }
`