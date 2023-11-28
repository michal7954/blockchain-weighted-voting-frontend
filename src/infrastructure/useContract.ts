import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import useContractStore from "./useContractStore";
import getContractConsts from "infrastructure/getContractConsts";


export default function useContract() {
    const { contract, setContract } = useContractStore();
    const { account, provider } = useWeb3React<Web3Provider>();

    useEffect(() => {
        if (contract) return;
        if (!account) return;

        setContract(
            new Contract(...getContractConsts(), provider?.getSigner())
        );
    }, [account, provider, contract, setContract]);

    return contract;
};
