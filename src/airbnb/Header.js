import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header__container">

            <img
                className="header__icon"
                src="https:/i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="logo"
            />

            <section className='header__center'>
                <input type="text" />
                <SearchIcon />
            </section>

            <section className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <PersonIcon />
            </section>

        </div>
    )
}

export default Header
