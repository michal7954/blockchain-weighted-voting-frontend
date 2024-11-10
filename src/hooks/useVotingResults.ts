import { VotingStatus } from "enums/VotingStatus";
import { Block } from "ethers";
import useContract from "infrastructure/useContract";
import { useCallback, useEffect, useState } from "react";
import { VotingResults } from "types/contractTypes";

export default function useVotingResults(
    votingEndTime: Date,
    votingStatus: VotingStatus
) {
    const [results, setResults] = useState<Array<bigint> | null>(null);
    const contract = useContract();

    const storeResults = useCallback((results: VotingResults) => {
        setResults(results.map((result) => result[1].toBigInt()));
    }, []);

    useEffect(() => {
        if (contract && votingStatus === VotingStatus.AfterVotingLock) {
            contract.on(contract.filters.VotingResults(), storeResults);
        }

        return () =>
            void contract?.removeAllListeners(contract.filters.VotingResults());
    }, [contract, storeResults, votingStatus]);

    useEffect(
        () =>
            void (async () => {
                if (!contract) return;
                if (votingStatus !== VotingStatus.AfterVotingLock) return;

                const resultsHistory = (await contract.queryFilter(
                    contract.filters.VotingResults()
                )) as any;
                const lastEvent = resultsHistory.at(-1);
                const block: Block = await lastEvent?.getBlock();
                if (block?.timestamp * 1000 > votingEndTime.getTime()) {
                    storeResults(lastEvent?.args[0]);
                } else {
                    setResults(null);
                }
            })(),
        [contract, storeResults, votingStatus, votingEndTime]
    );

    return results;
}
