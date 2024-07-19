// scripts/swap.js

async function main() {
  const [deployer] = await ethers.getSigners();
  const tokenAAddress = "0x28118136087F083DDB574eDC2FE7A84402ea00c4"; // Replace with deployed TokenA address
  const tokenBAddress = "0x9906F1810FDA623Aad892caE086EeAAfAA987531"; // Replace with deployed TokenB address
  const pairAddress = "0x3c1461079ecd965F2bd75125fE1aA43992fB5eB8"; // Replace with deployed Pair address

  const UniswapV2Pair = await ethers.getContractAt("UniswapV2Pair", pairAddress);
  const TokenA = await ethers.getContractAt("UniswapV2ERC20", tokenAAddress);
  const TokenB = await ethers.getContractAt("UniswapV2ERC20", tokenBAddress);

  // Approve the pair contract to spend TokenA
  const amountToSwap = ethers.utils.parseUnits("1", 18); // 1 TokenA
  await TokenA.approve(pairAddress, amountToSwap);
  console.log("TokenA approved for swapping");

  // Perform the swap
  const amountOut = ethers.utils.parseUnits("100", 18); // 100 TokenB
  const to = deployer.address;
  await UniswapV2Pair.swap(0, amountOut, to, TokenB);
  console.log("Swap executed: 1 TokenA for 100 TokenB");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
