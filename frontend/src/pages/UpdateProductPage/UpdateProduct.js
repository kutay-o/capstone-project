import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateProductByProductId } from "../../contractFunctions/ContractFunctions";
import "./style.css";
const UpdateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productDate, setProductDate] = useState("");
    const { productId } = useParams();
    let location = useLocation();
    const { productObject } = location.state;
    let navigate = useNavigate();

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        console.log("productName ", productName);
        console.log("productDate ", productDate);
        await updateProductByProductId(productId, productName, productDate);
        alert("Lütfen biraz bekleyiniz")
        setTimeout(3000);
        alert("Ürün başarıyla güncellendi. !")
    }

    return (
        <div className="UpdateProduct">
            <header className="UpdateProduct-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ürün id</Form.Label>
                            <Form.Control type="text" value={productId} />
                            <Form.Label>Ürün girişi yapan cüzdan adresi</Form.Label>
                            <Form.Control type="text" value={productObject.productOwner} />
                            <Form.Label>Ürün adı</Form.Label>
                            <Form.Control type="text" defaultValue={productObject.productName} onChange={(event) => setProductName(event.target.value)} />
                            <Form.Label>Ürün kayıt tarihi</Form.Label>
                            <Form.Control type="date" defaultValue={productObject.productDate} onChange={(event) => setProductDate(event.target.value)} />
                            <Row style={{ "marginTop": "10px" }}>
                                <Button variant="primary" type="submit" onClick={(e) => updateProduct(e)} >
                                    Güncelle
                                </Button>
                            </Row>
                            <Row style={{ "marginTop": "10px" }}>
                                <Button variant="danger" type="submit" onClick={(e) => changeRouteToProductAdd(e)} >
                                    Ürünlerime dön
                                </Button>

                            </Row>


                        </Form.Group>
                    </Form>
                </Container>
            </header>
        </div>);

}

export default UpdateProduct;