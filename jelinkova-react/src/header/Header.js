import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoHeader from '../images/logo-jelinkova-svg.svg';
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
                                            <Link to="/massages/masaz-2" >Anticelulitidní masáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-3" >Manuální lymfodrenáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-3" >Klasická masáž</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-3" >Sports massage</Link>
                                        </li>
                                        <li>
                                            <Link to="/massages/masaz-3" >Anticelulitidní masáž</Link>
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