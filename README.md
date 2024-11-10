# Weighted voting system on Blockchain - front end

This repository contains an implementation of a front-end web interface for a weighted voting system, developed as part of an engineering diploma project on "Application of Blockchain Technology in the Implementation of a Weighted Voting System." 

The primary repository including implementation of smart contracts for this decentralized application is located in [blockchain-weighted-voting](https://github.com/michal7954/blockchain-weighted-voting). Please, refer there for more project-oriented details, example use cases and list of implemented features.

The interface allows users to cast votes with dynamically calculated weights and view the status of an ongoing voting process in real-time. This app is designed exclusively for voters and observers, and does not include an administrator panel for managing the voting process.

## Code Highlights

- **Initialize Voting Contract API**:  
   Sets up the main connection to the voting smart contract using `ethers.js` and `web3-react` libraries for enabling seamless blockchain interaction. The contract instance is stored in `Zustand` (global state manager) for easy access across components. 
   [Link to useContract.ts](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/infrastructure/useContract.ts)

- **Retrieve Voting Locked Status**:  
   Monitors whether voting is open or closed by querying the blockchain and listening for real-time events. This ensures that users see the current voting status immediately and accurately.  
   [Link to useVotingLocked.ts](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/hooks/useVotingLocked.ts)

- **Main App Panel**:  
   Centralized panel that displays all essential voting information, including status, start/end times, and options. This panel uses custom hooks to manage specific contract interactions, providing a streamlined and responsive user experience.  
   [Link to UserPanel.tsx](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/components/UserPanel/UserPanel.tsx)

- **Cast a Vote**:  
   Triggers the smart contract’s vote method, allowing users to cast their vote.  
   [Link to VotingOption.tsx](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/components/VotingOption/VotingOption.tsx#L23-L35)

## Graphical Interface
From a voter perspective there are four phases of a voting process.

1. Voting not yet set

![obraz](https://github.com/user-attachments/assets/0e5eedf4-ccb2-4486-a17c-953b21c4abbd)

2. Voting set and confirmed

![obraz](https://github.com/user-attachments/assets/7ecb40c6-e113-4824-8c9e-d972ba70f79a)

3. Voting phase

![obraz](https://github.com/user-attachments/assets/03972f52-3175-4c40-b9ff-f6cf5a78a801)

4. Results

![obraz](https://github.com/user-attachments/assets/c3057dbe-0251-4b07-a5e8-2a5cf023c8ea)
