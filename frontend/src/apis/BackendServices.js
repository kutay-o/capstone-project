import axios from "axios";

export async function getProducerInfoAPI(walletAddress) {
    const response = {
        content: null,
        statusCode: null
    };
    try {
        await axios.get("http://localhost:8080/company/getInfo", {
            params: {
                wallet: walletAddress
            }
        })
            .then(res => {
                console.log("res: ", res);
                response.content = res.data;
                response.statusCode = res.status;
            })
    } catch (err) {
        response.content = err.message;
        response.statusCode = err.response.status;
        console.log("res-err: ", response);
    }
    return response;
} 

export async function createCompany(company) {
    const response = {
        content: null,
        statusCode: null
    };
    console.log("create-company: ", company);
    try {
        await axios.post("http://localhost:8080/company/create", company)
            .then(res => {
                console.log("res: ", res);
                response.content = res.data;
                response.statusCode = res.status;
            })
    } catch (err) {
        response.content = err.message;
        response.statusCode = err.response.status;
        console.log("res-err: ", response);
    }
    return response;
}

export async function addEmployeeToCompany(employee) {
    console.log("addEmployeeToCompany: ", employee);
    try {
        await axios.post("http://localhost:8080/company/add/employee", employee)
            .then(res => {
                console.log("res: ", res);
            })
    } catch (err) {
        console.log("addEmployeeToCompany err: ", err);
    }
}

export async function removeEmployee(employee) {
    console.log("removeEmployee: ", employee);
    try {
        await axios.post("http://localhost:8080/company/delete/employee", employee)
            .then(res => {
                console.log("res: ", res);
            })
    } catch (err) {
        console.log("removeEmployee err: ", err);
    }
}
