// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedCreditScoring {
    struct User {
        address walletAddress;
        uint256 creditScore;
        string ipfsDataHash; // IPFS hash for off-chain data storage
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress);
    event CreditScoreUpdated(address indexed userAddress, uint256 newScore);

    modifier onlyRegistered() {
        require(users[msg.sender].isRegistered, "User not registered");
        _;
    }

    function registerUser(string memory ipfsDataHash) external {
        require(!users[msg.sender].isRegistered, "User already registered");

        users[msg.sender] = User({
            walletAddress: msg.sender,
            creditScore: 0,
            ipfsDataHash: ipfsDataHash,
            isRegistered: true
        });

        emit UserRegistered(msg.sender);
    }

    function updateCreditData(string memory ipfsDataHash) external onlyRegistered {
        users[msg.sender].ipfsDataHash = ipfsDataHash;
    }

    function calculateCreditScore(uint256 income, uint256 debt, uint256 repaymentHistory) external onlyRegistered {
        uint256 score = (income * 3 + repaymentHistory * 5 - debt * 2) / 10;

        if (score < 300) score = 300;
        if (score > 850) score = 850;

        users[msg.sender].creditScore = score;

        emit CreditScoreUpdated(msg.sender, score);
    }

    function getCreditScore(address userAddress) external view returns (uint256) {
        require(users[userAddress].isRegistered, "User not registered");
        return users[userAddress].creditScore;
    }
}