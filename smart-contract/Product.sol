//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Record.sol";

contract Product is Record{
    mapping (uint => Product) products;
    mapping (uint => SingleRecord[]) productRecords;

    function createProduct(string memory productName, string memory productDate, address productOwner) 
    public returns(Product memory) {
        uint productId = getComplexNumber(block.number);
        Product storage product = products[productId];
        product.productId = productId;
        product.productName = productName;
        product.productDate = productDate;
        product.productOwner = productOwner;

        return product;
    }

    function addRecordToProduct(uint productId, Producer memory producer,
    string memory detail, string memory registrationDate) public {
        require(products[productId].productId != 0, "Product does not exist");
        Product memory product = products[productId];
        SingleRecord memory record = createRecord(producer.companyName, producer.producerAddress, 
        product, detail, registrationDate);
        productRecords[productId].push(record);
    }

    function getProductByProductId(uint productId) public view returns(Product memory) {
        require(products[productId].productId != 0, "Product does not exist");
        return products[productId];
    }

    function getProductRecordsByProductId(uint productId) public view returns (SingleRecord[] memory) {
        require(products[productId].productId != 0, "Product does not exist");
        return productRecords[productId];
    }

    //product update etmek nasıl olmalı, tüm fieldları updateable olmalı mı ?
    function updateProductByProductId(uint productId, Product memory product) public returns (Product memory) {
        require(products[productId].productId != 0, "Product does not exist");
        products[productId] = product;
        return product;
    }
}