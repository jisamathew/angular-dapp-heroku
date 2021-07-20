// // Allows us to use ES6 in our migrations and tests.
require('babel-register')

// module.exports = {
//   networks: {
//     development: {
//       host: 'localhost',
//       port: 8545,
//       network_id: '*' // Match any network id
//     }
//   }
// }
const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
// const REMOTE_NODE="https://ropsten.infura.io/v3/13a795e450c64689b10a96b91452034c"
// // REMOTE_NODE="https://ropsten.infura.io/v3/13a795e450c64689b10a96b91452034c"
// const MNEMONIC = "mechanic idle dynamic produce album blade salmon love cram expose day spirit"
const REMOTE_NODE="https://ropsten.infura.io/v3/d0a3141b3ba340b3a3169979e5c311f5"
//My chrome mnemonics
const MNEMONIC = "calm cover torch social mom medal there ridge stand salute obvious just"
//firefox
// const MNEMONIC = "swim office danger sail any light section flat hint infant poverty panda" 

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    ropsten:{
      // provider: () => new HDWalletProvider(process.env.MNEMONIC,process.env.REMOTE_NODE),
      provider: () => new HDWalletProvider(MNEMONIC,REMOTE_NODE),
      network_id: 3
    }
  },

  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
    }
  }
}
