# Customized Uniswap V2 AMM Model

## Understanding of Uniswap V2

Uniswap V2 is a decentralized exchange protocol that utilizes an Automated Market Maker (AMM) model. The core components include the UniswapV2Pair, UniswapV2Factory, and the Router contract.

## Modifications Made

- Changed the trading fee from 0.3% to 0.5%.
- Added support for dynamic fee adjustments.

## How to Change the Trading Fee

- Modified the `swap` function in `UniswapV2Pair.sol` to change the fee from 0.3% to 0.5%.

## Additional Features

- Implemented a dynamic fee adjustment mechanism, allowing the fee to be updated based on market conditions.


## Summary  

1.Initialize npm: npm init -y  
2.Install Hardhat Locally: npm install --save-dev hardhat  
3.Initialize Hardhat: npx hardhat  
4.Install Additional Dependencies: npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers  
5.Move Contracts: Ensure contracts are in the contracts directory  
6.Update Config: Edit hardhat.config.js  
7.Compile Contracts: npx hardhat compile  
----------------------------  
Compiled 2 Solidity files successfully.  
----------------------------  
8.Create Deployment Script: scripts/deploy.js  
9.Deploy Contracts: npx hardhat run scripts/deploy.js --network sepolia  
  
------------Result---------------  
Deploying contracts with the account: 0xd989d4d96361B40d3BffeD03696F4BD214537268  
UniswapV2ERC20 deployed to: 0xfd33eEe3BE6458B0ed8e0b70773e6e553Dd68F8b  
UniswapV2Factory deployed to: 0xB8EF2e5545d928Ec3253D982baC42495e936FE8a  
UniswapV2Pair deployed to: 0x93545A92017c06907120FF1Dc7F436B1057Bd98C  
----------------------------------  
10.Create Interact Script: scripts/interact.js  
11.Interact with Contracts: npx hardhat run scripts/interact.js --network sepolia  
  
-------------Result---------------  
UniswapV2ERC20 name: Uniswap V2  
UniswapV2Factory feeToSetter: 0xd989d4d96361B40d3BffeD03696F4BD214537268  
UniswapV2Pair dynamicFee: 5  
----------------------------------  