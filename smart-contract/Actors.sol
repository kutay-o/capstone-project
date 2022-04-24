//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Actors {
     struct SingleRecord {
        string registrantName;
        address registrantAddress;
        uint registrationNumber; // hash de olabilir o zaman string gerek, recordId demek istedim
        //sanırım
        string productName;
        string batchNumber; // productId olabilir
        string detail;
        string registrationDate;
    }

    struct Product {
        uint productId;
        string productName;
        string productDate;
        address productOwner;
    }

     struct Producer {
        address producerAddress;
        string companyName;
        uint companyId;
    }
}