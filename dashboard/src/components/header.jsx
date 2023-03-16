import React from 'react';
import { HeaderStyled } from '../styles/headerStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

function Header () {

    return(<HeaderStyled>
        <div className='header-wrapper'>
            <a className="logo" href="#">
            <FontAwesomeIcon icon={faUserAstronaut}/>
            <h1>Seize The Day</h1>
            </a>
        </div>

    </HeaderStyled>)

}

export default Header