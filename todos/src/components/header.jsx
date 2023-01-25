import React from 'react';
import { HeaderStyled } from '../styles/headerStyled';

function Header () {

    return(<HeaderStyled>
        <div className='header-wrapper'>
            <h1>A Pretty Good To-do List</h1>
            <h3>At least, I think so</h3>
        </div>
        <div className="border"/>
    </HeaderStyled>)

}

export default Header