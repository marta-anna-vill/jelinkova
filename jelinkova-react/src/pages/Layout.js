import { Outlet, Link } from "react-router-dom";
import logoHeader from '../images/logo.png';
import iconFacebook from '../images/icons8-facebook.svg';
import iconInstagram from '../images/icons8-instagram.svg';
import imageFooter from '../images/footer-photo.jpg';
import { useState } from "react";


const Layout = () => {

    const [open, toggle] = useState(false);

    const handleToggle = () => {
        toggle(!open);
    }

    return (
        <>
            <header className={open ? "open" : ""}>
                <div className="header-container">
                    <div className="header">
                        <div className="header-logo">
                            <a href="/">
                                <img src={logoHeader} alt="Logo-massages" />
                            </a>
                        </div>
                        <nav className="header-menu">
                            <ul>

                                <li>
                                    <Link to="/">Domů</Link>
                                </li>
                                <li>
                                    <Link to="/about">O mně</Link>
                                </li>
                                <li>
                                    <Link to="/massages">Masáže</Link>
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

            <div className="header-space"></div>

            <Outlet />

            {/* <footer>
                <div className="footer-top">
                    <div className="base-container">
                        <div className="footer-top-inner">
                            <div className="footer-top-content">
                                <h2>Where to find us</h2>
                                Praha
                                <h2>Follow us</h2>
                                <div className="social-container">
                                    <a className="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank" rel="noreferrer">
                                        <img src={iconFacebook} alt=""/>
                                    
                                    </a>
                                    <a className="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank"  rel="noreferrer">
                                        <img src={iconInstagram} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-top-image">
                                <img src={imageFooter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="base-container">
                        <div className="footer-middle-inner">
                            <div className="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="/">Home</Link>
                            </div>
                            <div className="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="./gallery.html">Gallery</Link>
                            </div>
                            <div className="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="./pricing.html">Pricing</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="base-container">
                        <div className="footer-copy-inner">
                            © created by Marta | 2022
                        </div>
                    </div>
                </div>

            </footer> */}
        </>
    )
};

export default Layout;