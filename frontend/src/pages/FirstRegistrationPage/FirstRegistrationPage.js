import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../apis/BackendServices";
import { addProducerToSystem, getProducerInfo } from "../../contractFunctions/ContractFunctions";
import "./style.css";

const FirstRegistrationPage = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    let navigate = useNavigate();
    const changeRouteToProductAdd = () => {
        let path = "/product-add";
        navigate(path);
    }

    const saveCompany = async (e) => {
        e.preventDefault();
        await addProducerToSystem(companyName);
        const producerWalletAddress = localStorage.getItem("wallet_address");
        var flag = true;
        var producerInfo = null;
        alert("İşlem onaylanmaktadır lütfen bekleyiniz.")
        while (flag) {
            producerInfo = await getProducerInfo(producerWalletAddress);
            if (producerInfo.producerAddress == producerWalletAddress) {
                flag = false;
                console.log("PRODUCER INFO FOUND !!");
                alert("İşlem başarıyla sonuçlanmıştır.")
            }
            else
                setTimeout(2000);
        }
        //const producerInfo = await getProducerInfo(producerWalletAddress);
        console.log("producer-info: ", producerInfo);
        const company = {
            companyName: companyName,
            companyAddress: companyAddress,
            companyId: producerInfo.companyId.toNumber(),
            isAdmin: true,
            wallet: producerWalletAddress
        };
        console.log("company-obje", company);
        const createdCompany = await createCompany(company);
        console.log("response company : ", createdCompany);
        changeRouteToProductAdd(); // biraz bekledikten sonra buraya geçmeli 
    }


    return (
        <div className="FirstRegistrationPage">
            <header className="FirstRegistrationPage-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Şirket adı</Form.Label>
                            <Form.Control type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                            <Form.Label>Şirket adresi</Form.Label>
                            <Form.Control as="textarea" style={{ height: 150, width: 220 }} value={companyAddress} onChange={(event) => setCompanyAddress(event.target.value)} />
                            <Button variant="primary" type="submit" onClick={(e) => {
                                saveCompany(e);
                            }} >
                                Kaydet
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
            </header>
        </div>
    );
}

export default FirstRegistrationPage;