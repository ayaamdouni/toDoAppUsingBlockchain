import Web3 from "web3";

const web3 = new Web3(window.ethereum);

const ContractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_content",
                "type": "string"
            }
        ],
        "name": "createTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "taskCount",
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
        "name": "tasks",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "content",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "completed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// interacting with the smart contract
const address = '0xb7cE19e7d947fD7e7f8156842DF52B2111D795eb';
// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(ContractABI, address);

export default contract;