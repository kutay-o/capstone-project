//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Actors.sol";
import "./Utils.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

contract RecordContract is Actors, Utils{
    mapping(uint => Record) records;

    function createRecord(string memory registrantName, address registrantAddress,
    uint productId, string memory productName, string memory detail, string memory registrationDate)
     public returns (Record memory) {
        uint record = getComplexNumber(block.number);
        Record memory sr = Record(registrantName, registrantAddress, record, productName, Strings.toString(productId), detail, registrationDate); 
        records[record] = sr;
        return sr;
    }

    function updateExistRecord(uint recordId, string memory detail) public returns (Record memory) {
        Record storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        sr.detail = detail;
        return sr;
    }

    function getRecordByRecordId(uint recordId) public view returns(Record memory) {
        Record storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        return sr;
    }

}