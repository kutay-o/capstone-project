import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCompanyProducts, getProducerInfo } from "../../contractFunctions/ContractFunctions";
import "./style.css";
import editLogo from "../../editLogo.png";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const FetchProducts = () => {
    const [productList, setProductList] = useState([]);
    const qrRef = React.useRef([]);


    useEffect(() => {
        const fetchCompanyProducts = async () => {
            setProductList(await getProducts())
        }
        fetchCompanyProducts()
        console.log("productlİst ", productList);

    }, [])

    const getProducts = async () => {
        console.log("productmap triggered");
        const walletAddress = localStorage.getItem("wallet_address");
        const producerInfo = await getProducerInfo(walletAddress);
        console.log("producerInfo ", producerInfo);
        const companyProducts = await getCompanyProducts(producerInfo.companyId.toNumber());
        console.log("companyProducts: ", companyProducts)
        return companyProducts;
    }

    const downloadQRCodeProduct = (e, index) => {
        e.preventDefault();
        let canvas = qrRef.current[index].querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const productsCardList = <Row xs={1} md={3} className="g-4" >
        {productList.length == 0 ? <Card.Title
            style={{ fontSize: "35px", marginRight: "20px", marginLeft: "200px" }}>
            Henüz ürün girilmemiştir
        </Card.Title> : productList.map((product, index) => {
            console.log("productMap", product.productName)
            return (
                <Col style={{ alignItems: "center", justifyContent: "center", display: "flex", flex:1}}>
                    <Card
                        bg="success"
                        key="Success"
                        style={{ width: 350, padding: 20 }}
                        className="m-3"
                    >
                        <Card.Body>
                            <Card.Title style={{ fontSize: "25px" }}>Ürün id : {product.productId.toNumber()}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "15px" }}>{product.productDate}</Card.Subtitle>
                            <Card.Text style={{ fontSize: "11px" }}>
                                {product.productName}
                            </Card.Text>
                        </Card.Body>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <Link to={`/product-record-add/${product.productId.toNumber()}`}>
                                <Button style={{ marginBottom: "10px" }} variant="primary">Ürüne kayıt ekle</Button>
                            </Link>
                            <Link to={`/fetch-product-records/${product.productId.toNumber()}`}>
                                <Button variant="primary">Ürün kayıtlarını getir</Button>
                            </Link>
                        </div>
                        <Link to={`/update-product/${product.productId.toNumber()}`} state={{ productObject: product }}>
                            <Image height={20} width={35} style={{ position: "absolute", right: "10px", bottom: "10px" }} src={editLogo}></Image>
                        </Link>
                        <div ref={e => qrRef.current[index]=e}>
                        <QRCodeCanvas style={{"width":"40px", "height":"40px", "marginTop":"15px"}} value={`http://192.168.1.41:3000/p/${product.productId.toNumber()}`} onClick={(e) => downloadQRCodeProduct(e, index)}/>
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