import React from 'react';
import styled from 'styled-components';


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
        ${props => {
            console.log(props.animate)
            if(props.animate === "on"){
                return(`animation: borderfade .3s ease-in-out;
                animation-fill-mode: forwards;
                animation-direction: forwards;`)
            } else if(props.animate === "off"){
                return(`animation: borderfade .3s ease-in-out;
                animation-fill-mode: forwards;
                animation-direction: backwards;`)
            }else{
                return("")
            }
        }}
`