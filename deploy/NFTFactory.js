// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// import ethers from 'hardhat'
async function main() {
  const [owner] = await ethers.getSigners();
  console.log(owner);
  const balance = await owner.provider.getBalance(owner.address);
  console.log(balance);
  const balanceHuman = ethers.formatUnits(balance, 18);
  console.log(`Owner address: ${owner.address} with balance: ${balanceHuman}`);
  
  const NFTFactory = await ethers.getContractFactory("NFTFactory");
  const NFTFactoryInstance = await NFTFactory.deploy();
  await NFTFactoryInstance.waitForDeployment();
  console.log("seatedInstance address:", await NFTFactoryInstance.getAddress());
  const receipt = await seatedInstance.deploymentTransaction().wait();
  const gasUsed = receipt.gasUsed;
  console.log(gasUsed);
  const gasPrice = receipt.gasPrice;
  console.log(gasPrice);
  const transactionFee = gasUsed*gasPrice;
  const transactionFeeHuman = ethers.formatUnits(transactionFee, 18) 
  console.log(`Deployed for ${transactionFeeHuman}`); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
