require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.20",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: ["YOUR_PRIVATE_KEY"],
        },
    },
};