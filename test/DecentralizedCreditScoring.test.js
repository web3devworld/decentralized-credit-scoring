const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DecentralizedCreditScoring", function () {
    let decentralizedCreditScoring;
    let owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        const DecentralizedCreditScoring = await ethers.getContractFactory("DecentralizedCreditScoring");
        decentralizedCreditScoring = await DecentralizedCreditScoring.deploy();
        await decentralizedCreditScoring.deployed();
    });

    it("Should register a user", async function () {
        await decentralizedCreditScoring.registerUser("QmExampleIPFSHash");
        const user = await decentralizedCreditScoring.users(owner.address);
        expect(user.isRegistered).to.equal(true);
    });

    it("Should calculate a credit score", async function () {
        await decentralizedCreditScoring.registerUser("QmExampleIPFSHash");
        await decentralizedCreditScoring.calculateCreditScore(5000, 1000, 8);
        const score = await decentralizedCreditScoring.getCreditScore(owner.address);
        expect(score).to.equal(700); // Example score based on inputs
    });
});