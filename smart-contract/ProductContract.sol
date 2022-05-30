//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./RecordContract.sol";

contract ProductContract is RecordContract{
    mapping (uint => Product) public products;
    mapping (uint => mapping(uint => Record)) public allProductRecords; // (productId => (recordId => Records) ) 
    mapping (uint => uint[]) public productRecordIds; // productId => recordId[]
    //burada mappingde array indexi de istiyor array global tanımlanıp direkt o dönülebilir
    mapping (uint => Product[]) public companyProducts;

    modifier checkProductExist(uint productId) {
        require(products[productId].productId != 0, "Product does not exist");
        _;
    }
 
    function getProductRecordsByProductId(uint productId) 
    public view checkProductExist(productId) returns (Record[] memory) 
    {
        uint[] memory recordIds = productRecordIds[productId];
        Record[] memory recordsArr = new Record[](recordIds.length); 
        for(uint i = 0; i < recordIds.length; ++i) {
            Record memory productRecord = allProductRecords[productId][recordIds[i]];
            recordsArr[i] = productRecord;
        }
        return recordsArr;
    }

    function getProductRecordIds(uint productId) 
    public view checkProductExist(productId) returns(uint[] memory) {
        return productRecordIds[productId];
    }

    function getProductByProductId(uint productId) 
    public view checkProductExist(productId) returns(Product memory) {
        return products[productId];
    }

    function createProductInternal(string memory productName, string memory productDate, address productOwner, uint companyId) 
    internal returns(Product memory) {
        uint productId = getComplexNumber(block.number);
        Product memory product = Product(productId, productName, productDate, productOwner);
        products[productId] = product;
        companyProducts[companyId].push(product);
        return getProductByProductId(productId);
    }

    function addRecordToProductInternal(uint productId, string memory companyName, address producerAddress,
    string memory detail, string memory registrationDate) 
    internal checkProductExist(productId) {
        Product memory product = products[productId];
        uint recordId = createRecordInternal(companyName, producerAddress, 
        productId, product.productName, detail, registrationDate);
        Record memory record = getRecordByRecordId(recordId);
        //record kayıt oluyor ama geri dönen record boş oluyor memory ile ilgili olabilir
        allProductRecords[productId][record.registrationNumber] = record;
        productRecordIds[productId].push(record.registrationNumber);
    }

    //product update etmek nasıl olmalı, tüm fieldları updateable olmalı mı ?
    function updateProductByProductIdInternal(uint productId, Product memory product) 
    internal checkProductExist(productId) returns (Product memory) {
        products[productId] = product;
        return product;
    }

    
}