import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductRecordsByProductId } from "../../contractFunctions/ContractFunctions";
import "./style.css"
import editLogo from '../../editLogo.png';
const FetchProductRecords = () => {
    const { productId } = useParams();
    const [recordList, setRecordList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchProductRecords = async () => {
            setRecordList(await getRecords())
        }
        fetchProductRecords()
        console.log("recordList ", recordList);

    }, [])

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const getRecords = async () => {
        console.log("fetchRecords productId", productId)
        const productRecords = await getProductRecordsByProductId(productId);
        console.log("productRecords: ", productRecords)
        return productRecords;
    }

    const recordsCardList = <Row xs={1} md={3} className="g-4" >
        {recordList.length == 0 ? <Card.Title
            style={{ fontSize: "35px", marginRight:"20px", marginLeft:"200px"}}>
            Henüz kayıt girilmemiştir
        </Card.Title> : recordList.map((record) => {
            return (
                <Col style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                    <Card
                        bg="success"
                        key="Success"
                        style={{ width: 350, padding: 20, display: "flex" }}
                        className="m-3"
                    >
                        <Card.Body>
                            <Card.Title style={{ fontSize: "25px" }}>Ürün id : {productId}</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: "15px" }}> Kayıt tarihi : {record.registrationDate}</Card.Subtitle>
                            <Card.Text style={{ fontSize: "11px" }}>
                                <Card.Text>
                                    Kayıt id : {record.registrationNumber.toNumber()}
                                </Card.Text>
                                <Card.Text style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    Kayıt eden : {record.registrantName}
                                </Card.Text>
                                <Card.Text>
                                    Ürün adı : {record.productName}
                                </Card.Text>
                                <Card.Text style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    İşlem : {record.detail}
                                </Card.Text>
                            </Card.Text>

                        </Card.Body>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <Link to={`/update-record/${record.registrationNumber.toNumber()}`} state={{ detail: record.detail }}>
                                <Button style={{ marginBottom: "10px" }} variant="primary">İşlemi güncelle</Button>
                            </Link>


                        </div>

                    </Card>
                </Col>
            )
        })} </Row>

    return (
        <div className="FetchProductRecords">
            <header className="FetchProductRecords-header">
                <CardGroup>
                    {recordsCardList}
                </CardGroup>
                <Button size="lg" style={{ "position": "absolute", "bottom": "30px", "right": "30px" }} variant="danger" type="submit" onClick={(e) => changeRouteToProductAdd(e)} >
                    Ürünlerime dön
                </Button>
            </header>
        </div>
    );
}

export default FetchProductRecords;