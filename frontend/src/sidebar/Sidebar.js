import './sidebar.css';
import logo from './logo2.png';
import { BrowserRouter, Route, Router, Routes, Link, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';
import { Image } from "react-bootstrap";

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
            <nav>
                <Image src={logo} style={{display: "flex", width: "110%", justifyContent: "center", paddingTop: "15px"}}></Image>
            </nav>
        </div>
    );
}

export default Sidebar;