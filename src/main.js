const {Blockchain, Transaction} = require('./blockchain');

let myCoin = new Blockchain;
myCoin.createTransaction(new Transaction('address1', 'address2', 100))
myCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('\n Starting the miner...');
myCoin.minePendingTransactions('minerAddress');

console.log('\n Balance of miner is', myCoin.getBalanceOfAddress(('minerAddress')))

console.log('\n Starting the miner again...');
myCoin.minePendingTransactions('minerAddress');

console.log('\n Balance of miner is', myCoin.getBalanceOfAddress(('minerAddress')))