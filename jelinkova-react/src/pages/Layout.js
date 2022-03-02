import { Outlet, Link } from "react-router-dom";
import logo from '../images/massage-logo-2.jpg';

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
                
            </footer>
        </>
    )
};

export default Layout;