import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <span className="navbar-brand">ILGuard</span>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/history" className="nav-link">History</Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>

            </ul>
        </nav>
    );

}

export default NavBar;