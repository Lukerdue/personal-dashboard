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
        border-radius: 8px;
    }
    .buttons{
        height: 300px;
        padding: 20px;
    }
    .row{
        height: 15%;
    }
    .number {
        border-left: 1px solid gray;
        height: 100%;
        width: 25%;
        background: linear-gradient(gray, darkgray);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .backspace p{
        rotate: -90deg;
        width: fit-content;
    }
    .backspace{
        background: #a19e03;
    }
    .zero {
        width: 50%;
    }
    .clear{
        background: #034f59;
        border-left: none;
    }
    .all{
        background: #870343;
        border-left: none;
    }
`