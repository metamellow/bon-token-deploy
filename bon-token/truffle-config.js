	
const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();

module.exports = {

  networks: {
    matic: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        `https://polygon-mainnet.g.alchemy.com/v2/HdDxThAsnYXoyqdsOifYhHLtzeRHzIMW`
        ),
      network_id: 137,
      gas: 2900000,
      gasPrice: 40166904000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.16",
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: { polygonscan: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAPI-FOUND-ONLNE' },
};

// verify in hardhat with this 'npx truffle run verify Token --network matic'