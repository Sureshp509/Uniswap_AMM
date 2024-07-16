// scripts/deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const UniswapV2ERC20 = await ethers.getContractFactory("UniswapV2ERC20");
    const uniswapV2ERC20 = await UniswapV2ERC20.deploy();
    await uniswapV2ERC20.deployed();
    console.log("UniswapV2ERC20 deployed to:", uniswapV2ERC20.address);
  
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const uniswapV2Factory = await UniswapV2Factory.deploy(deployer.address);
    await uniswapV2Factory.deployed();
    console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);
  
    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    const uniswapV2Pair = await UniswapV2Pair.deploy();
    await uniswapV2Pair.deployed();
    console.log("UniswapV2Pair deployed to:", uniswapV2Pair.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  