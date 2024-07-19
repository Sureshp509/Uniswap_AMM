// scripts/deploy.js

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const UniswapV2ERC20 = await ethers.getContractFactory("UniswapV2ERC20");
  const tokenA = await UniswapV2ERC20.deploy();
  await tokenA.deployed();
  console.log("TokenA deployed to:", tokenA.address);

  const tokenB = await UniswapV2ERC20.deploy();
  await tokenB.deployed();
  console.log("TokenB deployed to:", tokenB.address);

  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(deployer.address);
  await uniswapV2Factory.deployed();
  console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);

  const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
  const uniswapV2Pair = await UniswapV2Pair.deploy();
  await uniswapV2Pair.deployed();
  console.log("UniswapV2Pair deployed to:", uniswapV2Pair.address);

  await uniswapV2Pair.initialize(tokenA.address, tokenB.address);
  console.log("UniswapV2Pair initialized with tokenA and tokenB");

  await uniswapV2Pair.setDynamicFee(5);
  console.log("Dynamic fee set to 0.5%");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
