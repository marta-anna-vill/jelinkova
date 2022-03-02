import { Outlet, Link } from "react-router-dom";
import logo from '../images/massage-logo-2.jpg';

const Layout = () => {
    return (
        <>
            <header>
                <div class="base-container">
                    <div class="header">
                        <div class="header-logo">
                            <a href="/">
                                <img src={logo} alt="Logo-massages" />
                            </a>
                        </div>
                        <nav class="header-menu">
                            <ul>

                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">Cosmetics & Beauty</Link>
                                </li>
                            </ul>
                        </nav>
                        <div class="header-cta">
                            <Link className="btn btn-primary" to="/about">Contact us</Link>
                        </div>
                    </div>
                </div>
            </header>

            <div class="header-space"></div>

            <Outlet />

            <footer>
                
            </footer>
        </>
    )
};

export default Layout;