import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCompanyProducts, getProducerInfo } from "../../contractFunctions/ContractFunctions";
import "./style.css";
const FetchProducts = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchCompanyProducts = async () => {
            setProductList(await getProducts())
        }
        fetchCompanyProducts()
        console.log("productlİst ", productList);

    })

    const getProducts = async () => {
        console.log("productmap triggered");
        const walletAddress = localStorage.getItem("wallet_address");
        const producerInfo = await getProducerInfo(walletAddress);
        console.log("producerInfo ", producerInfo);
        const companyProducts = await getCompanyProducts(producerInfo.companyId.toNumber());
        console.log("companyProducts: ", companyProducts)
        return companyProducts;
    }

    const productsCardList = <Row xs={1} md={3} className="g-4" >
    {productList.map((product) => {
        console.log("productMap", product.productName)
        return (
            <Col style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
            <Card
                bg="success"
                key="Success"
                style={{ width: 350, padding: 20}}
                className="m-3"
            >
                <Card.Body>
                    <Card.Title style={{ fontSize: "25px" }}>Ürün id : {product.productId.toNumber()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "15px" }}>{product.productDate}</Card.Subtitle>
                    <Card.Text style={{ fontSize: "11px" }}>
                        {product.productName}
                    </Card.Text>
                </Card.Body>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center",}}>
                <Link to={`/product-record-add/${product.productId.toNumber()}`}>
                    <Button style={{marginBottom: "10px"}} variant="primary">Ürüne kayıt ekle</Button>
                </Link>
                <Link to={`/fetch-product-records/${product.productId.toNumber()}`}>
                    <Button variant="primary">Ürün kayıtlarını getir</Button>
                </Link>
                </div>
            </Card>
            </Col>
        )
    })} </Row>

    return (
        <div className="FetchProducts">
            <header className="FetchProducts-header">
                <CardGroup >
                    {productsCardList}
                </CardGroup>
            </header>
        </div>
    );
}

export default FetchProducts;