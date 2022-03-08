import { Link } from "react-router-dom";

const Footer = () => {
    return (
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
                                    <img src="./images/icons8-facebook.svg" />
                                </a>
                                <a class="social-item"
                                    href="https://nicepage.com/templates/preview/exceptional-beauty-service-1292320?device=desktop"
                                    target="_blank">
                                    <img src="./images/icons8-instagram.svg" />
                                </a>
                            </div>
                        </div>
                        <div class="footer-top-image">
                            <img src="./images/footer-photo.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-middle">
                <div class="base-container">
                    <div class="footer-middle-inner">
                        <div class="footer-middle-col">
                            <h3>Nadpis</h3>
                            <Link to="/Home">Home</Link>
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
    )
}



