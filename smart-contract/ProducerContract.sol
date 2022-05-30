//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./ProductContract.sol";

contract ProducerContract is ProductContract{

    mapping (address => Producer) public producerList;
    mapping (uint => mapping(address => Producer)) public companyEmployees;
    //mapping (address => Product[]) public producerProducts; //companyId olacak şekilde projectte tutuyorum silineiblir burası
    mapping (uint => address) public ownerOfCompany;

    modifier checkProducerExist() {
        require(producerList[msg.sender].companyId == 0, "Producer already joined");
        _;
    }

    modifier isOwnerOfCompany(uint companyId) {
        require(ownerOfCompany[companyId] == msg.sender, "You are not allowed for removing producer to this company");
        _;
    }

    modifier isCompanyExist(uint companyId) {
        require(ownerOfCompany[companyId] != address(0x0), "Company does not exist");
        _;
    }

    modifier isWorkerAtCompany(uint companyId, address workerAddress) {
        require(companyEmployees[companyId][workerAddress].producerAddress != address(0x0), "Not worker in this company");
        _;
    }

    //producer ürünleri listeleme 
    function getCompanyProducts(uint companyId) external view
    isCompanyExist(companyId) returns (Product[] memory) {
        return companyProducts[companyId];
    }

    //First registration for company. This account will be an admin on this companyId.
    function addProducerToSystem(string memory companyName) public checkProducerExist{
        uint companyId = getComplexNumber(block.number);
        Producer memory producer;
        producer.companyName = companyName;
        producer.producerAddress = msg.sender;
        producer.companyId = companyId;
        producerList[msg.sender] = producer;
        companyEmployees[companyId][msg.sender] = producer;
        ownerOfCompany[companyId] = msg.sender;
    } 

    //The admin account can just add employee under to the exist companyId
    function addProducerToSystemWithCompanyId(Producer memory producer) public {
        require(msg.sender == ownerOfCompany[producer.companyId], "You are not allowed for adding producer to this company");
        producerList[producer.producerAddress] = producer;
        companyEmployees[producer.companyId][producer.producerAddress] = producer;
     }

    //producer çıkarma metodu 
     function removeProducerFromCompany (address removedAdress, uint companyId) public
        isOwnerOfCompany(companyId) {
            delete(producerList[removedAdress]);
            delete(companyEmployees[companyId][removedAdress]);
        }
     
}
