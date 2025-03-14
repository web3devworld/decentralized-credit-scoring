# Decentralized Credit Scoring System

A decentralized application (dApp) for managing and calculating credit scores using blockchain technology. This project demonstrates how to build a transparent and immutable credit scoring system on the Ethereum blockchain.

## Features
- **User Registration**: Users can register with their wallet address.
- **Off-Chain Data Storage**: Sensitive user data is stored off-chain using IPFS.
- **Credit Scoring Algorithm**: A scoring algorithm evaluates financial data to assign a credit score.
- **Blockchain Transparency**: All transactions and scores are recorded on the blockchain.
- **Frontend Integration**: A React-based frontend allows users to interact with the dApp.

## Technologies Used
- **Blockchain**: Ethereum (or any EVM-compatible chain).
- **Smart Contracts**: Solidity.
- **Frontend**: React.js.
- **Decentralized Storage**: IPFS.
- **Wallet Integration**: MetaMask.
- **Development Frameworks**: Hardhat, ethers.js.

## Project Structure
```
decentralized-credit-scoring/
├── contracts/                # Solidity smart contracts
│   └── DecentralizedCreditScoring.sol
├── scripts/                  # Deployment and testing scripts
│   └── deploy.js
├── frontend/                 # React frontend for interacting with the dApp
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── test/                     # Unit tests for smart contracts
│   └── DecentralizedCreditScoring.test.js
├── .gitignore                # Files to ignore in version control
├── README.md                 # Project overview and instructions
└── package.json              # Dependencies for the entire project
```

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** and **npm**: [Download Node.js](https://nodejs.org/)
- **MetaMask**: Install the [MetaMask browser extension](https://metamask.io/).
- **Infura Account**: Sign up for an account at [Infura](https://infura.io/) to access Ethereum networks.
- **IPFS**: Familiarize yourself with [IPFS](https://ipfs.tech/) for decentralized storage.

### Installation

1. **Clone the Repository**:
   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/web3devworld/decentralized-credit-scoring.git
   cd decentralized-credit-scoring
   ```

2. **Install Dependencies**:
   - For the root project:
     ```bash
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_wallet_private_key
   ```

   > **Note**: Never commit sensitive information like private keys to GitHub. Ensure `.env` is listed in `.gitignore`.

4. **Compile the Smart Contract**:
   Use Hardhat to compile the Solidity smart contract:

   ```bash
   npx hardhat compile
   ```

5. **Deploy the Smart Contract**:
   Update the deployment script (`scripts/deploy.js`) with your wallet private key and network details, then run:

   ```bash
   npx hardhat run scripts/deploy.js --network rinkeby
   ```

   Replace `rinkeby` with the desired network (e.g., `mainnet`, `goerli`).

6. **Update Frontend Configuration**:
   In the `frontend/src/App.js` file, replace `YOUR_CONTRACT_ADDRESS` with the deployed contract address from the previous step.

7. **Start the Frontend**:
   Start the React development server:

   ```bash
   cd frontend
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`.

## Running Tests
To run unit tests for the smart contract:

```bash
npx hardhat test
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your meaningful commit message"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request against the `main` branch.

## About the Developer
This dApp was developed by **[Web3Dev Strategy Consulting](https://web3dev.click)**, a leading provider of custom Web3 solutions. We specialize in designing and building decentralized applications (dApps), blockchain platforms, and smart contracts tailored to your business needs.

If you’re looking for custom-made Web3 dApps or platforms, feel free to reach out to us:
- **Website**: [https://web3dev.click](https://web3dev.click)
- **Email**: support@web3dev.click
- **Twitter**: [@Web3DevWorld](https://twitter.com/Web3DevWorld)

We’d love to help bring your Web3 ideas to life!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
