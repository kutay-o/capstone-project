//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Utils {

function getComplexNumber(uint id) internal view returns(uint) {       
        return uint(keccak256(abi.encode(id,
            msg.sender,
            block.number,
            block.timestamp,
            blockhash(block.number - 1))));            
    } 
}