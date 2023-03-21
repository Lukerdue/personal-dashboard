import React from 'react';
import styled from 'styled-components';

export const CalculatorStyled = styled.div`
    border: 1px solid #f09;
    width: 25%;
    min-width: 350px;
    border-radius: 10px;
    padding: 2px;
    .inner{
        border: 1px solid darkgray;
        border-radius: 10px;
    }
    .buttons{
        height: 300px;
        padding: 20px;
    }
    .row{
        height: 8%;
    }
    .number {
        height: 100%;
        width: 25%;
        background: linear-gradient(gray, darkgray);
        margin: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .backspace p{
        rotate: -90deg;
        width: fit-content;
    }
    .zero {
        width: 30%;
    }
`