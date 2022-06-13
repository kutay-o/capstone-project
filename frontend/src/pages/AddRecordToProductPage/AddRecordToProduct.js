import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addRecordToProduct } from "../../contractFunctions/ContractFunctions";
import "./style.css";
const AddRecordToProduct = () => {
    const [companyName, setCompanyName] = useState("");
    const [recordDate, setRecordDate] = useState("");
    const [recordDetail, setRecordDetail] = useState("");
    const { productId } = useParams();
    let navigate = useNavigate();

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const addRecord = async (e) => {
        e.preventDefault();
        const producerAddress = localStorage.getItem("wallet_address");
        console.log("addRecordToProduct productId", productId)
        await addRecordToProduct(productId, companyName, producerAddress, recordDetail, recordDate)
        alert("Kayıt başarıyla oluşturuldu. !")
    }

    return (
        <div className="AddRecordToProduct">
            <header className="AddRecordToProduct-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Kaydı yapan firma adı</Form.Label>
                            <Form.Control type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                            <Form.Label>Kayıt tarihini giriniz</Form.Label>
                            <Form.Control type="date" value={recordDate} onChange={(event) => setRecordDate(event.target.value)} />
                            <Form.Label>Detaylı açıklama</Form.Label>
                            <Form.Control as="textarea" style={{ height :150,width:220, marginLeft:"35px" }} value={recordDetail} onChange={(event) => setRecordDetail(event.target.value)} />
                            <Button variant="primary" type="submit" onClick={(e) => addRecord(e)} >
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

export default AddRecordToProduct;