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
    input{
        padding: 5px;
        border: none;
        border-bottom: 2px solid #adadad;
        background-color: transparent;
        color: #ededed;
    }
    .target{
        animation: borderfade .3s ease-in-out;
        animation-fill-mode: forwards;
    }
    .untarget{
        animation: borderfade .3s ease-in-out;
        animation-direction: backwards;
    }
    button{
        margin-left: 15px;
        color: #ededed;
        padding: 10px 30px;
        background: #262626;
        box-shadow:  20px 20px 24px #1d1d1d,
             -20px -20px 24px #303030;
        border-radius: 20px;
        border: none;
    }
    button:hover{
        cursor: pointer;
    }

    @media only screen and (max-width: 550px){
        padding: 20px;
        button{
            margin-left: 10px;
            padding: 5px 15px;
            box-shadow: 10px 10px 14px #1d1d1d,
                        -10px -10px 14px #303030;
            border-radius: 15px;
        }
    }
`