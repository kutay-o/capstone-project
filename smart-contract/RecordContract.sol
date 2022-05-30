//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Actors.sol";
import "./Utils.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

contract RecordContract is Actors, Utils{
    mapping(uint => Record) public records;

    function createRecordInternal(string memory registrantName, address registrantAddress,
    uint productId, string memory productName, string memory detail, string memory registrationDate)
     internal returns (uint) {
        uint record = getComplexNumber(block.number);
        Record memory sr = Record(registrantName, registrantAddress, record, productName, Strings.toString(productId), detail, registrationDate); 
        records[record] = sr;
        return record;
    }

    function updateExistRecordInternal(uint recordId, string memory detail) internal returns (uint) {
        Record storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        sr.detail = detail;
        return sr.registrationNumber;
    }

    function getRecordByRecordId(uint recordId) public view returns(Record memory) {
        Record storage sr = records[recordId];
        require(sr.registrationNumber != 0, "record is not exist");
        return sr;
    }

}