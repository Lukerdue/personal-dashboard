import React from 'react';
import styled from 'styled-components';

export const TodoStyled = styled.div`
      width: 20%;
    div{
        padding: 20px 30px;
        color: #4d4d4d;
        margin: 30px 10px;
        border-radius: 31px;
        background: linear-gradient(315deg, #e3e3e3, #bfbfbf);
        box-shadow:  -12px -12px 31px #aaaaaa,
             12px 12px 31px #fefefe;
    }
    .completed{
        border-radius: 31px;
        background: #d7ffc2;
        box-shadow: inset -12px -12px 31px #accc9b,
            inset 12px 12px 31px #ffffe9;
        color: gray;
        text-decoration: line-through;
    }
`