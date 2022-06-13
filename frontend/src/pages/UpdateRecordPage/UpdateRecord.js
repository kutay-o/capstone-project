import { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateExistRecord } from "../../contractFunctions/ContractFunctions";
import "./style.css";

const UpdateRecord = () => {
    const [recordDetail, setRecordDetail] = useState("");
    const { recordId } = useParams();
    let location = useLocation();
    const { detail } = location.state;
    let navigate = useNavigate();

    const updateRecord = async (e) => {
        e.preventDefault();
        const producerAddress = localStorage.getItem("wallet_address");
        console.log("updateRecord recordId", recordId)
        console.log("recordDetail ", recordDetail);
        await updateExistRecord(recordId, recordDetail);
        alert("Kayıt başarıyla güncellendi. !")
        //await addRecordToProduct(productId, companyName, producerAddress, recordDetail, recordDate)
        //alert("Kayıt başarıyla oluşturuldu. !")
    }

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }
    return (
        <div className="UpdateRecord">
            <header className="UpdateRecord-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Detaylı açıklama</Form.Label>
                            <Form.Control as="textarea" style={{ height: 150, width: 220 }} defaultValue={detail} onChange={(event) => setRecordDetail(event.target.value)} />
                            <Row style={{"marginTop":"10px"}}>
                                <Button variant="primary" type="submit" onClick={(e) => updateRecord(e)} >
                                    Güncelle
                                </Button>
                            </Row>
                            <Row style={{"marginTop":"10px"}}>
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

export default UpdateRecord;