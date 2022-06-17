import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoHeader from '../images/logo.svg';
export const Header = () => {
    const [open, toggle] = useState(false);
    const [scroll, changeScroll] = useState(0);
    const [isHovered, handleHovered] = useState(false);

    const handleToggle = () => {
        toggle(!open);
    };

    const handleScroll = () => {
        changeScroll(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", function () {
            handleScroll();
        });
    });

    return (
        <header className={open ? "open" : ""}>
                <div className="header-container">
                    <div className="header">
                        <div className="header-logo">
                            <a href="/">
                                <img src={logoHeader} alt="Logo-massages" />
                            </a>
                        </div>
                        <nav className={`header-menu`}>
                            <ul className={`${isHovered ? 'any-link-hovered' : ''}`}>

                                <li onMouseEnter={() => handleHovered(true)} onMouseLeave={() => handleHovered(false)}>
                                    <Link to="/">Domů</Link>
                                </li>
                                <li onMouseEnter={() => handleHovered(true)} onMouseLeave={() => handleHovered(false)}>
                                    <Link to="/about">O mně</Link>
                                </li>
                                <li onMouseEnter={() => handleHovered(true)} onMouseLeave={() => handleHovered(false)}>
                                    <Link to="/massages">Masáže</Link>
                                    <span className="submenu-open"></span>
                                    <ul>
                                        <li>
                                            <Link to="/massages/masaz-1" >Těhotenská masáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-2" >Velvet touch massage</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-3" >Breussova masáž a Balneo</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-4" >Manuální lymfodrenáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-5" >Anticelulitidní masáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-6" >Klasická masáž</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li onMouseEnter={() => handleHovered(true)} onMouseLeave={() => handleHovered(false)}>
                                    <Link to="/cenik">Ceník</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-cta">
                            <Link className="btn btn-primary" to="/about">Kontakt</Link>
                            <a className="btn-phone" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="hamburger-menu">
                            <a className="open-menu" onClick={handleToggle}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
    )
}