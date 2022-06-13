import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeEmployee } from "../../apis/BackendServices";
import { getCompanyProducers, getOwnerOfCompany, getProducerInfo, removeProducerFromCompany } from "../../contractFunctions/ContractFunctions";
import "./style.css";
const FetchEmployee = () => {
    const [employeeList, setEmployeeList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        const fetchCompanyEmployees = async () => {
            setEmployeeList(await getCompanyEmployees());
        }
        fetchCompanyEmployees()

    }, [])

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
    }

    const changeRouteToEmployeeAdd = () => {
        let path = "/add-employee";
        navigate(path);
    }

    const getCompanyEmployees = async () => {
        console.log("getCompanyEmployees triggered");
        const walletAddress = localStorage.getItem("wallet_address");
        const producerInfo = await getProducerInfo(walletAddress);
        console.log("producerInfo ", producerInfo);
        const companyProducers = await getCompanyProducers(producerInfo.companyId.toNumber());
        console.log("companyProducers: ", companyProducers)
        return companyProducers;
    }

    const removeProducer = async (e, removeAddress, companyId) => {
        e.preventDefault();
        await removeProducerFromCompany(removeAddress, companyId.toNumber());
        const adminWallet = await getOwnerOfCompany(companyId.toNumber());
        const employee = {
            deleteEmployeeWallet : removeAddress,
            companyId : companyId.toNumber(),
            adminWallet : adminWallet
        };
        await removeEmployee(employee);
    }

    const companyEmployeeList = <Row xs={1} md={3} className="g-4" >
        {employeeList.length == 0 ? <Card.Title
            style={{ fontSize: "35px", marginRight: "20px", marginLeft: "200px" }}>
            Yükleniyor..
        </Card.Title> : employeeList.map((employee) => {
            if (employee.producerAddress != "0x0000000000000000000000000000000000000000") {
                return (
                    <Col style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                        <Card
                            bg="success"
                            key="Success"
                            style={{ width: 350, padding: 20 }}
                            className="m-3"
                        >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "25px" }}>İsim : {employee.producerName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "15px" }}>Şirket : {employee.companyName}</Card.Subtitle>
                                <Card.Text style={{ fontSize: "11px" }}>
                                    Wallet : {employee.producerAddress}
                                </Card.Text>
                            </Card.Body>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                <Button variant="danger" onClick={(e) => removeProducer(e, employee.producerAddress, employee.companyId)}>Kişiyi çıkar</Button>
                            </div>
                        </Card>
                    </Col>
                )
            }
        })} </Row>

    return (
        <div className="FetchEmployee">
            <header className="FetchEmployee-header">
                <CardGroup >
                    {companyEmployeeList}
                </CardGroup>
                <Button size="lg" style={{ "position": "absolute", "bottom": "70px", "right": "30px", "width": "108px" }} variant="success" type="submit" onClick={(e) => changeRouteToEmployeeAdd(e)} >
                    Çalışan ekle
                </Button>
                <Button size="lg" style={{ "position": "absolute", "bottom": "30px", "right": "30px" }} variant="danger" type="submit" onClick={(e) => changeRouteToProductAdd(e)} >
                    Ürünlerime dön
                </Button>
            </header>
        </div>
    );
}

export default FetchEmployee;