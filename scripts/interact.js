// scripts/interact.js

async function main() {
    const [deployer] = await ethers.getSigners();
  
    // Addresses of deployed contracts
    const uniswapV2ERC20Address = "0xfd33eEe3BE6458B0ed8e0b70773e6e553Dd68F8b" //"UNISWAP_V2_ERC20_CONTRACT_ADDRESS";
    const uniswapV2FactoryAddress ="0xB8EF2e5545d928Ec3253D982baC42495e936FE8a" //"UNISWAP_V2_FACTORY_CONTRACT_ADDRESS";
    const uniswapV2PairAddress = "0x93545A92017c06907120FF1Dc7F436B1057Bd98C" //"UNISWAP_V2_PAIR_CONTRACT_ADDRESS";
  
    // Interact with UniswapV2ERC20
    const UniswapV2ERC20 = await ethers.getContractAt("UniswapV2ERC20", uniswapV2ERC20Address);
    console.log("UniswapV2ERC20 name:", await UniswapV2ERC20.name());
  
    // Interact with UniswapV2Factory
    const UniswapV2Factory = await ethers.getContractAt("UniswapV2Factory", uniswapV2FactoryAddress);
    console.log("UniswapV2Factory feeToSetter:", await UniswapV2Factory.feeToSetter());
  
    // Interact with UniswapV2Pair
    const UniswapV2Pair = await ethers.getContractAt("UniswapV2Pair", uniswapV2PairAddress);
    const dynamicFee = await UniswapV2Pair.dynamicFee();
    console.log("UniswapV2Pair dynamicFee:", dynamicFee.toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  