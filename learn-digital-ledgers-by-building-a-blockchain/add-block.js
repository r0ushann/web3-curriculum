import { getBlockchain , writeBlockchain} from "./blockchain-helpers.js";


const blockchain = getBlockchain();


const previousBlock = blockchain[blockchain.length-1];

const newBlock = {
    hash: Math.random().toString(),
    previousHash: previousBlock.hash
};

blockchain.push(newBlock);
//console.log(blockchain);

writeBlockchain(blockchain);