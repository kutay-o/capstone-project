import { Button, Col, Container, Form, FormGroup, Image, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import metamaskLogo from './metamask-fox.png';
import { ethers } from "ethers";
import Web3 from 'web3';
import { getProducerInfo, getRecordById } from "../../contractFunctions/ContractFunctions";
import { getProducerInfoAPI } from "../../apis/BackendServices";

const Login = () => {
    let navigate = useNavigate();
    const changeRouteToHomepage = () => {
        let path = "/";
        navigate(path);
    }

    const changeRouteToProductAdd = () => {
        let path = "/products";
        navigate(path);
        window.location.reload();
    }
    var account = null;

    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    const [address, setAddress] = useState(null)
    useEffect(() => {
        setAddress(localStorage.getItem("wallet_address"))
    });
    const [error, setError] = useState('')
    /*
        const connectMetaMask = () => {
            if (window.ethereum) {
                // res[0] for fetching a first wallet
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((res) => accountChangeHandler(res[0]))
                    .then(changeRouteToProductAdd());
                
            } else {
                alert("install metamask extension!!");
            }
        };
    */

    const checkFirstRegistration = async () => {
        const walletAddress = localStorage.getItem("wallet_address");
        const respone = await getProducerInfoAPI(walletAddress);
        if(respone.statusCode == "404") {
            alert(respone.content);
            let path = "/first-register";
            navigate(path);
        } else {
            localStorage.setItem("producerInfo", JSON.stringify(respone.content));
            const contractResponse = await getProducerInfo(walletAddress);
            localStorage.setItem("producerName", contractResponse.producerName);
            changeRouteToProductAdd();
        }
        /* 
            backend getInfo apisine wallet ile istek at??lmal??
            e??er 404 d??n??yorsa  first registration ekran??na gitmeli
            smart-contracttaki addProducerToSystem a al??nan bilgiyle kay??t at??lmal??
            daha sonra getProducerInfo ile kay??t edilmi?? producer bilgileri ??ekilmeli
            backend create apisine companyBilgileri ile kay??t at??lmal??
            ve anasayfaya d??n??lmeli (kullan??c?? anasayfas??)
        */
    }

    const connectWalletHandler = async () => {
        /* check if MetaMask is installed */
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" })
                const web3 = new Web3(window.ethereum)
                const accounts = await web3.eth.getAccounts()
                const walletAddress = accounts[0];

                localStorage.setItem("wallet_address", walletAddress);
                const wallet_address = localStorage.getItem("wallet_address");
                if (wallet_address == accounts[0]) {
                    checkFirstRegistration();
                }
                console.log(localStorage.getItem("wallet_address"));

            } catch (err) {
                setError(err.message)
            }
        } else {
            // meta mask is not installed
            alert("Please install MetaMask")
        }
    }

    /*
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
    */
    return (
        <div className="Login">
            <header className="Login-header">
                <Container style={{
                    display: "flex", flex: 1, flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Form>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Metamask ba??lant??s?? i??in t??klay??n??z</Form.Label>
                            <Col>
                                <Image src={metamaskLogo} height={200} width={200} responsive onClick={connectWalletHandler}></Image>
                                <Col><Form.Label>Coin miktar?? : {data.Balance == null ? 0 : data.Balance}</Form.Label></Col>
                                <Col><Form.Label>Wallet adresi  : {address}</Form.Label></Col>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Row style={{ padding: 5, width: 500 }}>
                        <Button onClick={changeRouteToHomepage}>Anasayfa i??in l??tfen t??klay??n??z</Button>
                        <Button onClick={checkFirstRegistration}>DENEME i??in l??tfen t??klay??n??z</Button>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Login;