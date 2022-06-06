import './sidebar.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';

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
                        <a href="#">Çıkış Yap</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Sidebar;