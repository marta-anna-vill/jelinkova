import { Outlet, Link } from "react-router-dom";
import logo from '../images/massage-logo-2.jpg';
import iconFacebook from '../images/icons8-facebook.svg';
import iconInstagram from '../images/icons8-instagram.svg';
import imageFooter from '../images/footer-photo.jpg';

const Layout = () => {
    return (
        <>
            <header>
                <div className="base-container">
                    <div className="header">
                        <div className="header-logo">
                            <a href="/">
                                <img src={logo} alt="Logo-massages" />
                            </a>
                        </div>
                        <nav className="header-menu">
                            <ul>

                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">Cosmetics & Beauty</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-cta">
                            <Link className="btn btn-primary" to="/about">Contact us</Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-space"></div>

            <Outlet />

            <footer>
                <div class="footer-top">
                    <div class="base-container">
                        <div class="footer-top-inner">
                            <div class="footer-top-content">
                                <h2>Where to find us</h2>
                                Praha
                                <h2>Follow us</h2>
                                <div class="social-container">
                                    <a class="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank">
                                        <img src={iconFacebook} />
                                    </a>
                                    <a class="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank">
                                        <img src={iconInstagram} />
                                    </a>
                                </div>
                            </div>
                            <div class="footer-top-image">
                                <img src={imageFooter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-middle">
                    <div class="base-container">
                        <div class="footer-middle-inner">
                            <div class="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="/">Home</Link>
                            </div>
                            <div class="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="./gallery.html">Gallery</Link>
                            </div>
                            <div class="footer-middle-col">
                                <h3>Nadpis</h3>
                                <Link to="./pricing.html">Pricing</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copy">
                    <div class="base-container">
                        <div class="footer-copy-inner">
                            © created by Marta | 2022
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
};

export default Layout;