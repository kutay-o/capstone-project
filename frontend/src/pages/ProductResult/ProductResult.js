import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import "./style.css"
const ProductResult = () => {
    const { productId } = useParams();
    let navigate = useNavigate();
    const changeRouteToHomepage = () => {
        let path = "/";
        navigate(path);
    }

    return (
        <div className="ProductResult">
            <header className="ProductResult-header">
                <p>SONUÇ: {productId}</p>
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa için lütfen tıklayınız</Button>
                    </Row>
                </Container>
            </header>

        </div>
    );
}

export default ProductResult;