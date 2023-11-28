import useContract from "infrastructure/useContract";
import { useState, useCallback, useEffect } from "react";
import { BigNumber } from "@ethersproject/bignumber";

export default function useVotingTimes() {
    const contract = useContract();
    const [votingTimes, setVotingTimes] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const loadVotingTimes = useCallback(async () => {
        if (!contract) return;
        const response = (await contract.getVotingTimes()) as [
            BigNumber,
            BigNumber
        ];
        setVotingTimes(
            response.map(
                (bigNumber) => new Date(bigNumber.toNumber() * 1000)
            ) as [Date, Date]
        );
    }, [contract]);

    useEffect(() => void loadVotingTimes(), [loadVotingTimes]);

    useEffect(() => {
        if (contract) {
            contract.on(contract.filters.NewVotingTimes(), loadVotingTimes);
        }

        return () => {
            if (contract) {
                contract.removeAllListeners(contract.filters.NewVotingTimes());
            }
        };
    }, [contract, loadVotingTimes]);

    return votingTimes;
};
