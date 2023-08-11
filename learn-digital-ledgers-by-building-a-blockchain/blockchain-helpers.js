import { writeFileSync , readFileSync, readFile} from 'fs';


export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain(){
    const blockchainFile = readFileSync('./blockchain.json');
    const blockchain = JSON.parse(blockchainFile);
    return blockchain;
}