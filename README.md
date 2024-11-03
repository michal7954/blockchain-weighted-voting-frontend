# Weighted voting system on Blockchain - front end

This repository contains an implementation of a front-end web interface for weighted voting system as part of an engineering diploma project on "Application of blockchain technology in the implementation of a weighted voting system".

The primary repository including implementation of smart contracts for this decentralized application is located in [blockchain-weighted-voting](https://github.com/michal7954/blockchain-weighted-voting). Please, refere there for more project-oriented details, example use cases and list of implemented features.

## Code Highlights
- **Main App Panel**: Aggregates all most important information about the voting. Uses bunch of custom hooks for handling specific parts of communication with the contract. [Link to UserPanel.txt](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/components/UserPanel/UserPanel.tsx)
- **Cast a Vote**: Handler for casting a vote for selected option. [Link to the part of VotingOption.tsx](https://github.com/michal7954/blockchain-weighted-voting-frontend/blob/master/src/components/VotingOption/VotingOption.tsx#L23-L35)

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
