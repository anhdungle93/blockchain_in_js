const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3bf93a73975d568479c00a5f5bda0cb38dd3bc800ec7b18ef6256b20ca452780')
const myWalletAddress = myKey.getPublic('hex')

let myCoin = new Blockchain;

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of mine is', myCoin.getBalanceOfAddress((myWalletAddress)))

console.log('Is chain valid', myCoin.isChainValid());