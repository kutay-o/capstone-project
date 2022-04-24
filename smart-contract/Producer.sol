//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Product.sol";

contract Producer is Product{

    mapping (address => Producer) producerList;
    mapping (address => Product[]) producerProducts;

    modifier checkProducerExist() {
        require(producerList[msg.sender].companyId != 0, "Producer already joined");
        _;
    }

    //record update veya create yapabilmek için producer yetki modifier metodu

    //producer çıkarma metodu 

    //producer güncelleme metodu

    //product update etmek için producer modifier metodu

    //producer ürünleri listeleme 

    function addProducerToSystem(Producer memory producer) public checkProducerExist{
        producerList[msg.sender] = producer;
    } 

     
}
