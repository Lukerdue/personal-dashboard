import React from 'react';
import styled from 'styled-components';

function checkAnimation(state){
    if(state === "off"){
        return (`animation: borderfade .3s ease-in-out;
        animation-fill-mode: forwards;`)
    }else if (state === "on"){
        return (`animation: borderfade .3s ease-in-out;
        animation-direction: backwards;
        animation-fill-mode: forwards;`)
    } else {return('')}
}

export const TodoFormStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-bottom: 1px solid #f09;
    margin-bottom: 2px;
`

export const InputStyled = styled.input`
    @keyframes borderfade {
        0%{
            border-bottom: 2px solid #adadad;
        }
        100%{
            border-bottom: 2px solid #f09;
        }
    }
        padding: 5px;
        border: none;
        border-bottom: 2px solid #adadad;
        background-color: transparent;
        color: #ededed;
        ${checkAnimation(this.props)}
`