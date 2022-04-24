//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Actors.sol";
import "./Utils.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Record is Actors, Utils{
    mapping(uint => SingleRecord) records;

    function createRecord(string memory registrantName, address registrantAddress, 
    Product memory product, string memory detail, string memory registrationDate)
     public returns (SingleRecord memory) {
         uint record = getComplexNumber(block.number);
         SingleRecord storage sr = records[record];
        sr.registrantName = registrantName;
        sr.registrantAddress = registrantAddress;
        sr.registrationNumber = record;
        sr.batchNumber = Strings.toString(product.productId);
        sr.productName = product.productName;
        sr.detail = detail;
        sr.registrationDate = registrationDate;
        return sr;
    }

    function updateExistRecord(uint recordId, string memory detail) public returns (SingleRecord memory) {
        SingleRecord storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        sr.detail = detail;
        return sr;
    }

    function getRecordByRecordId(uint recordId) public view returns(SingleRecord memory) {
        SingleRecord storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        return sr;
    }

}