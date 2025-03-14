const hre = require("hardhat");

async function main() {
    const DecentralizedCreditScoring = await hre.ethers.getContractFactory("DecentralizedCreditScoring");
    const decentralizedCreditScoring = await DecentralizedCreditScoring.deploy();

    await decentralizedCreditScoring.deployed();

    console.log("DecentralizedCreditScoring deployed to:", decentralizedCreditScoring.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});