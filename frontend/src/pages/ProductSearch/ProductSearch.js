import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ProductResult from "../ProductResult/ProductResult";
import "./style.css";
const ProductSearch = () => {
    const [productId, setProductId] = useState("");
    let navigate = useNavigate();
    const changeRouteToHomepage = () => {
        let path = "/";
        navigate(path);
    }

    const changeRouteToResult = (productId) => {
        //p productResult sayfası olmalı productId yi o alıp o şekilde yüklemeli
        //bence aynı sayfaya yani product-search pathine render olmamalı çünkü
        //qr code geliştirmesi için daha uygn gibi geldi
        let path = "/p?id=" + productId;
        navigate(path);
    }
    return (
        <div className="ProductSearch">
            <header className="ProductSearch-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa için lütfen tıklayınız</Button>
                    </Row>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ürün kodu giriniz</Form.Label>
                        <Form.Control type="text" placeholder="örnek:3800298312" value={productId} onChange={(event) => setProductId(event.target.value)} />
                        <Link to={`/p/${productId}`}>
                            <Button variant="primary" type="submit" /*onClick={() => changeRouteToResult(productId)} */>
                                Sorgula
                            </Button>
                        </Link>

                    </Form.Group>
                </Form>
                </Container>
                
            </header>
        </div>

    );
}

export default ProductSearch;