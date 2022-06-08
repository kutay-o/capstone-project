import React, { useEffect, useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import { getProductRecordsByProductId } from "../../contractFunctions/ContractFunctions";
//import "./style.css"
import "./list.scss"
const ProductResult = () => {
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

    let navigate = useNavigate();
    const changeRouteToHomepage = () => {
        let path = "/";
        navigate(path);
    }

    const recordsListTable = recordList.map((record) => {
        return (
            <li class="table-row">
                <div class="col col-1" data-label="Kayıt id">{record.registrationNumber.toNumber()}</div>
                <div class="col col-2" data-label="Kayıt sorumlusu">{record.registrantName}</div>
                <div class="col col-3" data-label="Kayıt tarihi">{record.registrationDate}</div>
                <div class="col col-4" data-label="Ürün id">{record.batchNumber}</div>
                <div class="col col-5" data-label="Ürün adı">{record.productName}</div>
                <div class="col col-6" data-label="İşlem açıklaması">{record.detail}</div>
            </li>
        )
    })

    return (
        <div className="ProductResult">
            <header className="ProductResult-header">
                <div class="container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col col-1">Kayıt id</div>
                            <div class="col col-2">Kayıt sorumlusu</div>
                            <div class="col col-3">Kayıt tarihi</div>
                            <div class="col col-4">Ürün id</div>
                            <div class="col col-5">Ürün adı</div>
                            <div class="col col-6">İşlem açıklaması</div>
                        </li>
                        {recordsListTable}
                    </ul>
                </div>
                <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa için lütfen tıklayınız</Button>
                </Row>
            </header>

        </div>
    );
}

export default ProductResult;

/*
    <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kayıt id</th>
                                <th>Kayıt sorumlusu</th>
                                <th>Kayıt tarihi</th>
                                <th>Ürün id</th>
                                <th>Ürün adı</th>
                                <th>İşlem açıklaması</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordsListTable}
                        </tbody>
                    </Table>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa için lütfen tıklayınız</Button>
                    </Row>
                </Container>


                <tr>
                <td>1</td>
                <td>{record.registrationNumber.toNumber()}</td>
                <td>{record.registrantName}</td>
                <td>{record.registrationDate}</td>
                <td>{record.batchNumber}</td>
                <td>{record.productName}</td>
                <td>{record.detail}</td>
            </tr>

*/