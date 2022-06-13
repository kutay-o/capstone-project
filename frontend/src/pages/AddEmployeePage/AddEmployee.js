import "./style.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addEmployeeToCompany } from "../../apis/BackendServices";
import { addProducerToSystemWithCompanyId, getOwnerOfCompany } from "../../contractFunctions/ContractFunctions";
const AddEmployee = () => {
    const [producerAddress, setProducerAddress] = useState("");
    const [producerName, setProducerName] = useState("");
    let navigate = useNavigate();

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const create = async (e) => {
        e.preventDefault();
        const producerInfo = JSON.parse(localStorage.getItem("producerInfo"));
        try {
            await addProducerToSystemWithCompanyId(producerAddress, producerName, producerInfo.id, producerInfo.companyName);
            const adminWallet = await getOwnerOfCompany(producerInfo.id);
            const employee = {
                newWorkerWallet : producerAddress,
                companyId : producerInfo.id,
                adminWallet : adminWallet
            };
            await addEmployeeToCompany(employee);
        }catch(err) {
            console.log("add employee create err ", err);
        }
        
    }

    return ( 
        <div className="AddEmployee">
        <header className="AddEmployee-header">
            <Container style={{
                display: "flex", flex: 1, flexDirection: "column",
                justifyContent: "center", alignItems: "center"
            }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kullanıcı wallet adresini giriniz</Form.Label>
                        <Form.Control type="text" value={producerAddress} onChange={(event) => setProducerAddress(event.target.value)} />
                        <Form.Label>Kullanıcı adını giriniz</Form.Label>
                        <Form.Control type="text" value={producerName} onChange={(event) => setProducerName(event.target.value)} />
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
 
export default AddEmployee;