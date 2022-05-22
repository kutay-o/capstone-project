import { Button, Container, Row } from "react-bootstrap";
import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();
    const changeRouteToLogin = () => {
        let path = "/login";
        navigate(path);
    }

    const changeRouteToProductSearch = () => {
        let path = "/product-search";
        navigate(path);
    }
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <Container className="Container-Generic"
                    style={{
                        display: "flex", flex: 1, flexDirection: "column",
                        justifyContent: "center", alignItems: "center"
                    }}>
                    <Row style={{ padding: 5, width: 500}}>
                        <Button onClick={changeRouteToLogin}>Giriş yapmak için lütfen tıklayınız</Button>
                    </Row>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToProductSearch}>Ürün sorgulamak için lütfen tıklayınız</Button>
                    </Row>
                </Container>
            </header>
        </div>

    );
}

export default HomePage;