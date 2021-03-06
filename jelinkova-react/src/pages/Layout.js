import { Outlet, Link } from "react-router-dom";
//import logoHeader from '../images/logo.png';
import iconFacebook from '../images/icons8-facebook.svg';
import iconInstagram from '../images/icons8-instagram.svg';
import imageFooter from '../images/footer-photo.jpg';
import { Header } from "../header/Header";


const Layout = () => {

   

    return (
        <>
            <Header />

            <div className="header-space"></div>

            <Outlet />

            <footer>
                <div className="footer-top">
                    <div className="base-container">
                        <div className="footer-top-inner">
                            <div className="footer-top-content">
                                <h2 className="footer-title">Kde mě najdete</h2>
                                Boženy Němcové 698, 664 11  Zbýšov
                                <div className="footer-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.4817992526164!2d16.62284201591142!3d49.1914190851534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294457313f187%3A0x7dc23d5d63eeae3b!2sPUXdesign%20%E2%80%94%20Weby%2C%20e-shopy%20a%20port%C3%A1ly%20na%20m%C3%ADru!5e0!3m2!1scs!2scz!4v1653338123133!5m2!1scs!2scz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <h2 className="footer-title">Sledujte mě</h2>
                                <div className="social-container">
                                    <a className="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank" rel="noreferrer">
                                        <img src={iconFacebook} alt="" />

                                    </a>
                                    <a className="social-item"
                                        href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                        target="_blank" rel="noreferrer">
                                        <img src={iconInstagram} alt="" />
                                    </a>
                                </div>
                                <h2 className="footer-title">Ceritikace</h2>
                                <div className="certificate-container">
                                    <div className="certificate-item">
                                        certifikát
                                    </div>
                                    <div className="certificate-item">
                                        certifikát
                                    </div>
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
                                <h3>Služby</h3>
                                <ul>
                                    <li>
                                        <Link to="/">Masáž 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 3</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 4</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-middle-col">
                                <h3>Užitečné odkazy</h3>
                                <ul>
                                    <li>
                                        <Link to="/">Masáž 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 3</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Masáž 4</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-middle-col">

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

            </footer>
        </>
    )
};

export default Layout;