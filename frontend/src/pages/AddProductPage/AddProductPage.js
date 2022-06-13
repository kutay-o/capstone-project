import { ethers } from "ethers";
import { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createProduct, getProducerInfo } from "../../contractFunctions/ContractFunctions";
import "./style.css";
const AddProductPage = () => {
    const [productName, setProductName] = useState("");
    const [productDate, setProductDate] = useState("");
    //const [companyId, setCompanyId] = useState(null);
    const [productOwner, setProductOwner] = useState("");
    let navigate = useNavigate();

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const create = async (e) => {
        e.preventDefault();
        setProductOwner(localStorage.getItem("wallet_address"));
        console.log("product-owner-local", setProductOwner(localStorage.getItem("wallet_address")));
        console.log("productOwner", productOwner);
        if (productOwner === '') {
            console.error('connect your wallet.')
            alert('connect your wallet');
        }
        else {
            const producerInfo = await getProducerInfo(productOwner);
            console.log("producerınfo: ", producerInfo);
            console.log("company_id_before: ", producerInfo.companyId.toNumber());
            const companyId = producerInfo.companyId.toNumber();
            console.log("company_id: ", companyId);
            try {
                const createdProduct = await createProduct(productName, productDate, productOwner, companyId);
                console.log("createdProduct: ", createProduct);
            } catch (err) {
                console.log("errorrrrrrr", err);
            }
        }
    }

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
                            <Button variant="primary" type="submit" onClick={(e) => create(e)}>
                                Kaydet
                            </Button>
                        </Form.Group>
                    </Form>
                    <Button variant="danger" type="submit" onClick={(e) => changeRouteToProductAdd(e)} >
                        Ürünlerime dön
                    </Button>
                </Container>
            </header>
        </div>
    );
}

export default AddProductPage;