import './sidebar.css';
import { BrowserRouter, Route, Router, Routes, Link, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    let navigate = useNavigate();
    const producerInfo = JSON.parse(localStorage.getItem("producerInfo"));
    const producerName = localStorage.getItem("producerName");

    const exitButtonAction = () => {
        localStorage.removeItem("wallet_address");
        localStorage.removeItem("producerInfo");
        render(<HomePage />)
    }

    return (
        <div className="sidebar">
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/product-add">Ürün ekle</Link>
                    </li>
                    <li>
                        <Link to="/products">Ürün listele</Link>
                    </li>
                    <li>
                        <Link to="/fetch-employee">Çalışan listele</Link>
                    </li>
                    <li>
                        <Link onClick={exitButtonAction} to={"/"}>Çıkış yap</Link>
                    </li>
                </ul>
            </nav>
            <nav style={{ "fontSize": "11px", "fontWeight": "bold", "color": "black" }}>
                <ul>
                    <li>
                        Şirket id : {producerInfo.id}
                    </li>
                    <li>
                        Şirket adı : {producerInfo.companyName}
                    </li>
                    <li>
                        Kullanıcı : {producerName}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;