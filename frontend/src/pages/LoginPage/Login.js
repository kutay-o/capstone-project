import { Button, Col, Container, Form, FormGroup, Image, Row } from "react-bootstrap";
import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import metamaskLogo from './metamask-fox.png';
import { ethers } from "ethers";

const Login = () => {
    let navigate = useNavigate();
    const changeRouteToHomepage = () => {
        let path = "/";
        navigate(path);
    }
    var account = null;

    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    const connectMetaMask = () => {
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
            
        } else {
            alert("install metamask extension!!");
        }
    };

    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
            address: account,
        });
        localStorage.setItem("wallet_address", account);
        // Setting a balance
        getbalance(account);
    };

    return (
        <div className="Login">
            <header className="Login-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Metamask bağlantısı için tıklayınız</Form.Label>
                            <Col>
                                <Image src={metamaskLogo} height={200} width={200} responsive onClick={connectMetaMask}></Image>
                                <Col><Form.Label>Coin miktarı : {data.Balance == null ? 0 : data.Balance}</Form.Label></Col>
                                <Col><Form.Label>Wallet adresi  : {localStorage.getItem("wallet_address")}
                                </Form.Label></Col>
                            </Col>

                        </FormGroup>
                    </Form>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa için lütfen tıklayınız</Button>
                    </Row>
                </Container>
            </header>
        </div>

    );
}

export default Login;