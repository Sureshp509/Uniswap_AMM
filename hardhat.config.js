require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const  PRIVATE_KEY  = process.env;

module.exports = {
  solidity: "0.5.16",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [PRIVATE_KEY]
    }
  }
};
