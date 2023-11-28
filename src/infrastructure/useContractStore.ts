import { create } from "zustand";
import { Contract } from "@ethersproject/contracts";

interface ContractStoreType {
    contract?: Contract;
    setContract: (contract: Contract) => void;
}

const useContractStore = create<ContractStoreType>((set) => ({
    contract: undefined,
    setContract: (contract) => set({ contract }),
}));

export default useContractStore;
