import React from 'react';
import styled from 'styled-components';

export const TodoStyled = styled.div`
      width: 20%;
      text-align: center;
    div{
        padding: 20px 30px;
        color: #ededed;
        margin: 30px 10px;
        border-radius: 50px;
        background: #262626;
        box-shadow:  20px 20px 24px #202020,
             -20px -20px 24px #2c2c2c;
    }
    .completed{
        border-radius: 50px;
    background: #262626;
    box-shadow: inset 20px 20px 24px #202020,
            inset -20px -20px 24px #2c2c2c;
        color: lightgray;
        text-decoration: line-through;
    }
`