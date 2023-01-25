import React from 'react';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
    margin-bottom: 20px;
    background-color: #363636;

    @keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #f09,
      0 0 80px #f09,
      0 0 90px #f09,
      0 0 100px #f09,
      0 0 150px #f09;
  }
 0% {
    /* A slightly smaller blur radius */
    text-shadow:
      0 0 3px #fff,
      0 0 7px #fff,
      0 0 11px #fff,
      0 0 30px #f09,
      0 0 68px #f09,
      0 0 75px #f09,
      0 0 87px #f09,
      0 0 130px #f09;
  }
}
    .logo{
        display: flex;
        align-items: center;
        justify-items: center;
        width: 50%;
        color: #fff;
        animation: pulsate 1.5s ease-in-out infinite alternate;
       text-decoration: none;
    }
    .logo:visited{
        color: #ededed;
    }
    .logo:hover{
        color: #fc9dd6;
    }
    .logo svg{
        height: 1.5rem;
        padding-right: 15px;
    }

    .header-wrapper{
    padding: 20px 100px 20px 100px;
    }
    h1{
        font-size: 38px;
        font-family: 'Lobster Two', cursive;

    }
    h3{
        font-weight: 300;
        font-size: 18px;
        color: #ededed;
    }
    .border{
        height: 3px;
        background-image: linear-gradient(to right, #4ce09f, #76e28c, #99e37a, #b9e26c, #d8e062, #dbdf57, #dedd4c, #e2dc3f, #c7dd27, #a5df0d, #7be000, #36e006);    }
`