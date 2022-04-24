//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Project {

    

    struct Record {
        uint recordId;
        string recordDate;
        //***
    }
    
    mapping(address => Product[]) producerProducts;
    mapping(uint => Record[]) productRecords;

    mapping(address => bool) isProducerExist;
    mapping(address => uint) public producerProductCount;

    function createRecordForProduct(Product memory product) external checkProducer{
        producerProducts[msg.sender].push(product);
    }
    
    function getProducerProducts(address producerAddress) external view 
    returns (Product[] memory) {
        return producerProducts[producerAddress];
    }

    function addRecordToProduct(uint productId, Record record) {
        //todo product producerın mı kontrolü
    }


}