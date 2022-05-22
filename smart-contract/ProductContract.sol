//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./RecordContract.sol";

contract ProductContract is RecordContract{
    mapping (uint => Product) public products;
    mapping (uint => mapping(uint => Record)) allProductRecords; // (productId => (recordId => Records) ) 
    mapping (uint => uint[]) productRecordIds; // productId => recordId[]

    function createProduct(string memory productName, string memory productDate, address productOwner) 
    public returns(Product memory) {
        uint productId = getComplexNumber(block.number);
        Product memory product = Product(productId, productName, productDate, productOwner);
        products[productId] = product;
        return product;
    }

    function addRecordToProduct(uint productId, string memory companyName, address producerAddress,
    string memory detail, string memory registrationDate) public {
        require(products[productId].productId != 0, "Product does not exist");
        Product memory product = products[productId];
        Record memory record = createRecord(companyName, producerAddress, 
        productId, product.productName, detail, registrationDate);
        allProductRecords[productId][record.registrationNumber] = record;
        productRecordIds[productId].push(record.registrationNumber);
    }

    function getProductByProductId(uint productId) public view returns(Product memory) {
        require(products[productId].productId != 0, "Product does not exist");
        return products[productId];
    }

    function getProductRecordsByProductId(uint productId) public view returns (Record[] memory) {
        require(products[productId].productId != 0, "Product does not exist");
        uint[] memory recordIds = productRecordIds[productId];
        Record[] memory recordsArr = new Record[](recordIds.length); 
        for(uint i = 0; i < recordIds.length; ++i) {
            Record memory productRecord = allProductRecords[productId][recordIds[i]];
            recordsArr[i] = productRecord;
        }
        return recordsArr;
    }

    //product update etmek nasıl olmalı, tüm fieldları updateable olmalı mı ?
    function updateProductByProductId(uint productId, Product memory product) public returns (Product memory) {
        require(products[productId].productId != 0, "Product does not exist");
        products[productId] = product;
        return product;
    }
}