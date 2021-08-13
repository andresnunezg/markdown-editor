import React from 'react';

import './styles/Header.css'

class Header extends React.Component {
    render () {
        return (
            <header id="header">
                <div className="Title__container">
                    <h1 className="Header__title-1">Live&nbsp;</h1>
                    <h1 className="Header__title-2">Markdown Editor</h1>
                </div>
                <div className="Header__links">
                    <a
                     href="https://www.markdownguide.org/basic-syntax/"
                     target="_blank" rel="noreferrer"
                     className="Header__link"
                    >
                    Ayuda
                    </a>
                    <a
                     href="https://github.com/AndresNunezG/markdown-editor"
                     target="_blank"
                     rel="noreferrer"
                     className="Header__link"
                    >
                    Código
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;