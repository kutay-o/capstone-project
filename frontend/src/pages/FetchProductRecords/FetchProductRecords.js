import { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductRecordsByProductId } from "../../contractFunctions/ContractFunctions";
import "./style.css"
const FetchProductRecords = () => {
    const { productId } = useParams();
    const [recordList, setRecordList] = useState([]);

    useEffect(() => {
        const fetchProductRecords = async () => {
            setRecordList(await getRecords())
        }
        fetchProductRecords()
        console.log("recordList ", recordList);

    }, [])

    const getRecords = async () => {
        console.log("fetchRecords productId", productId)
        const productRecords = await getProductRecordsByProductId(productId);
        console.log("productRecords: ", productRecords)
        return productRecords;
    }

    const recordsCardList = recordList.map((record) => {
        return (
            <Card
            bg="success"
            key="Success"  
            style={{ width: 350, height: 400, padding: 20}}
            className="m-3"
            >
                <Card.Body>
                    <Card.Title>Ürün id : {productId}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted"> Kayıt tarihi : {record.registrationDate}</Card.Subtitle>
                    <Card.Text>
                        Kayıt id : {record.registrationNumber.toNumber()}
                        Kayıt eden : {record.registrantName}
                        Ürün adı : {record.productName}
                        İşlem : {record.detail}
                    </Card.Text>
                    <Button variant="primary">Ürüne kayıt ekle</Button>
                    <Button variant="primary">Ürün kayıtlarını getir</Button>
                </Card.Body>
            </Card>
        )
    })

    return (  
        <div className="FetchProductRecords">
            <header className="FetchProductRecords-header">
                <CardGroup>
                    {recordsCardList}
                </CardGroup>
            </header>
        </div>
    );
}
 
export default FetchProductRecords;