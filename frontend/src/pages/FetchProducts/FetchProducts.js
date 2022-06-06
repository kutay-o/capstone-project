import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
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

    const productsCardList = productList.map((product) => {
        console.log("productMap", product.productName)
        return (
            <Card
            bg="success"
            key="Success"  
            style={{ width: 250, height: 200, padding: 20}}
            className="mb-2"
            >
                <Card.Body>
                    <Card.Title>Ürün id : {product.productId.toNumber()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.productDate}</Card.Subtitle>
                    <Card.Text>
                        {product.productName}
                    </Card.Text>
                    <Button variant="primary">Ürün üzerine kayıt girin</Button>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className="FetchProducts">
            <header className="FetchProducts-header">
                <CardGroup>
                    {productsCardList}
                </CardGroup>
            </header>
        </div>
    );
}

export default FetchProducts;