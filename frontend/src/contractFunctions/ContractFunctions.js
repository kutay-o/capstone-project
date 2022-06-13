import { ethers } from "ethers";

//const contractAddress = "0x215440A363Ded85c42a77AA438E6638E563741ec";
//const contractAddress = "0xb5B5125f0254df31843482540F5F19da03A325D4";
const contractAddress = "0x489616f85942393445fBA944E0e3ef5d847fb1c6";
export async function requestAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  }



  export async function getRecordById(recordId) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(contractAddress, contractABI, provider)
      try {
        const data= await contract.records(recordId);
        console.log('data: ', data)
        return data;
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  export async function getProducerInfo(address) {
    console.log(address);
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const contract = new ethers.Contract(contractAddress, contractABI, provider)
        try {
          var producerInfo = await contract.producerList(address);
          console.log('data', producerInfo);
          console.log('company name: ', producerInfo.companyName)
          console.log('company id: ', producerInfo.companyId.toNumber())
          return producerInfo; 
        } catch (err) {
          console.log("Error: ", err)
        }
      }  
  }

  export async function createProduct(productName, productDate, productOwner, companyId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data= await contract.createProduct(productName, productDate, productOwner, companyId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
        }
      }    
  }

  export async function addProducerToSystem(companyName) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data= await contract.addProducerToSystem(companyName);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function getCompanyProducts(companyId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data= await contract.getCompanyProducts(companyId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function addRecordToProduct(productId, companyName, producerAddress, detail, registrationDate) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.addRecordToProduct(productId, companyName, producerAddress, detail, registrationDate);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function getProductRecordsByProductId(productId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.getProductRecordsByProductId(productId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function updateExistRecord(recordId, detail) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.updateExistRecord(recordId, detail);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function updateProductByProductId(productId, productName, productDate) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.updateProductByProductId(productId, productName, productDate);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function getCompanyProducers(companyId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.getCompanyProducers(companyId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function addProducerToSystemWithCompanyId(producerAddress, producerName, companyId, companyName) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.addProducerToSystemWithCompanyId(producerAddress, producerName, companyId, companyName);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function getOwnerOfCompany(companyId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.ownerOfCompany(companyId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }

  export async function removeProducerFromCompany(removedAdress, companyId) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log({ provider })
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        try {
          const data = await contract.removeProducerFromCompany(removedAdress, companyId);
          console.log('data', data);
          return data;
        } catch (err) {
          console.log("Error: ", err)
		  alert(err.message);
        }
      }    
  }


  const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			}
		],
		"name": "addProducerToSystem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "producerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "producerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			}
		],
		"name": "addProducerToSystemWithCompanyId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "producerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationDate",
				"type": "string"
			}
		],
		"name": "addRecordToProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allProductRecords",
		"outputs": [
			{
				"internalType": "string",
				"name": "registrantName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "registrantAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "registrationNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationDate",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "companyProducersAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "companyProductIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productDate",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "productOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			}
		],
		"name": "createProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "productOwner",
						"type": "address"
					}
				],
				"internalType": "struct Actors.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "registrantName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "registrantAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationDate",
				"type": "string"
			}
		],
		"name": "createRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			}
		],
		"name": "getCompanyProducers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "producerAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "companyName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "companyId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "producerName",
						"type": "string"
					}
				],
				"internalType": "struct Actors.Producer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			}
		],
		"name": "getCompanyProducts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "productOwner",
						"type": "address"
					}
				],
				"internalType": "struct Actors.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "getProductByProductId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "productOwner",
						"type": "address"
					}
				],
				"internalType": "struct Actors.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "getProductRecordIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "getProductRecordsByProductId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "registrantName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "registrantAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "batchNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "detail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "registrationDate",
						"type": "string"
					}
				],
				"internalType": "struct Actors.Record[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "recordId",
				"type": "uint256"
			}
		],
		"name": "getRecordByRecordId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "registrantName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "registrantAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "batchNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "detail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "registrationDate",
						"type": "string"
					}
				],
				"internalType": "struct Actors.Record",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownerOfCompany",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "producerList",
		"outputs": [
			{
				"internalType": "address",
				"name": "producerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "producerName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productRecordIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productDate",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "productOwner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "records",
		"outputs": [
			{
				"internalType": "string",
				"name": "registrantName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "registrantAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "registrationNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "registrationDate",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "removedAdress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "companyId",
				"type": "uint256"
			}
		],
		"name": "removeProducerFromCompany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "recordId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "updateExistRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productDate",
				"type": "string"
			}
		],
		"name": "updateProductByProductId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "productOwner",
						"type": "address"
					}
				],
				"internalType": "struct Actors.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];