import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className="header__container">
            <img
                className="header__icon"
                src="https:/i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="logo"
            />
            <section className='header_center'>
                <input type="text" />
                <SearchIcon />
            </section>
            <section>
                <LanguageIcon />
            </section>

        </div>
    )
}

export default Header
