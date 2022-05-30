//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./ProducerContract.sol";


contract Project is ProducerContract {
    mapping(uint => Record[]) productRecords;

    function createProduct(string memory productName, string memory productDate, address productOwner, uint companyId) 
    public isWorkerAtCompany(companyId, msg.sender) returns(Product memory) {
        return createProductInternal(productName, productDate, productOwner, companyId);
    }

    function addRecordToProduct(uint productId, string memory companyName, address producerAddress,
    string memory detail, string memory registrationDate) 
    public {
        Producer memory producer = producerList[msg.sender];
        require(companyEmployees[producer.companyId][producer.producerAddress].producerAddress != address(0x0), "Not worker in this company");
        addRecordToProductInternal(productId, companyName, producerAddress, detail, registrationDate);
    }

    function updateProductByProductId(uint productId, Product memory product) 
    public returns (Product memory) {
        Producer memory producer = producerList[msg.sender];
        require(companyEmployees[producer.companyId][producer.producerAddress].producerAddress != address(0x0), "Not worker in this company");
        return updateProductByProductIdInternal(productId, product);
    }

    function createRecord(string memory registrantName, address registrantAddress,
    uint productId, string memory productName, string memory detail, string memory registrationDate)
    public returns (uint) {
        Producer memory producer = producerList[msg.sender];
        require(companyEmployees[producer.companyId][producer.producerAddress].producerAddress != address(0x0), "Not worker in this company");
        return createRecordInternal(registrantName, registrantAddress, productId, productName, detail, registrationDate);
    }

    function updateExistRecord(uint recordId, string memory detail) public returns (uint) {
        Producer memory producer = producerList[msg.sender];
        require(companyEmployees[producer.companyId][producer.producerAddress].producerAddress != address(0x0), "Not worker in this company");
        return updateExistRecordInternal(recordId, detail);
    }
}