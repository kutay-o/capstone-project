import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./style.css";
const AddProductPage = () => {
    const [productName, setProductName] = useState("");
    const [productDate, setProductDate] = useState("");
    return (
        <div className="AddProduct">
            <header className="AddProduct-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ürün adını giriniz</Form.Label>
                            <Form.Control type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                            <Form.Label>Kayıt tarihini giriniz</Form.Label>
                            <Form.Control type="date" value={productDate} onChange={(event) => setProductDate(event.target.value)} />
                            <Button variant="primary" type="submit" /*onClick={() => changeRouteToResult(productId)} */>
                                Kaydet
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
            </header>
        </div>
    );
}

export default AddProductPage;