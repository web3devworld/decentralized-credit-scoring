import { useEffect, useState } from "react";
import { ethers } from "ethers";

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
const abi = [/* ABI of the smart contract */]; // Replace with the ABI from artifacts

function App() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [creditScore, setCreditScore] = useState(null);

    useEffect(() => {
        async function init() {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, abi, signer);
                setProvider(provider);
                setSigner(signer);
                setContract(contract);
            }
        }
        init();
    }, []);

    async function registerUser(ipfsHash) {
        const tx = await contract.registerUser(ipfsHash);
        await tx.wait();
        alert("User registered successfully!");
    }

    async function fetchCreditScore() {
        const score = await contract.getCreditScore(await signer.getAddress());
        setCreditScore(score.toString());
    }

    return (
        <div>
            <h1>Decentralized Credit Scoring System</h1>
            <button onClick={() => registerUser("QmExampleIPFSHash")}>Register User</button>
            <button onClick={fetchCreditScore}>Get Credit Score</button>
            {creditScore && <p>Your Credit Score: {creditScore}</p>}
        </div>
    );
}

export default App;