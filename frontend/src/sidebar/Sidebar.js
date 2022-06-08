import './sidebar.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';

const exitButtonAction = () => {
    localStorage.removeItem("wallet_address");
}

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/products">Ürün listele</Link>
                    </li>
                    <li>
                        <Link to="/add-employee">Çalışan ekle</Link>
                    </li>
                    <li>
                        <Link onClick={exitButtonAction} to="/">Çıkış yap</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Sidebar;