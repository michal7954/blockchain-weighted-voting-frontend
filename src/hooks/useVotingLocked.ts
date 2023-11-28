import useContract from "infrastructure/useContract";
import { useEffect, useState } from "react";

export default function useVotingLocked() {
    const contract = useContract();
    const [votingLocked, setVotingLocked] = useState(false);

    useEffect(() => {
        if (!contract) return;

        (async () => {
            const lockedEvents = (await contract.queryFilter(
                contract.filters.VotingLocked()
            )) as any;
            const unlockedEvents = (await contract.queryFilter(
                contract.filters.VotingReset()
            )) as any;

            if (lockedEvents.length === 0) {
                setVotingLocked(false);
                return;
            }

            if (unlockedEvents.length === 0) {
                setVotingLocked(true);
                return;
            }

            const blocksDifference =
                lockedEvents.at(-1)?.blockNumber -
                unlockedEvents.at(-1)?.blockNumber;

            if (blocksDifference > 0) {
                setVotingLocked(true);
            }
        })();
    }, [contract]);

    useEffect(() => {
        if (contract) {
            contract.on(contract.filters.VotingLocked(), () =>
                setVotingLocked(true)
            );
            contract.on(contract.filters.VotingReset(), () =>
                setVotingLocked(false)
            );
        }

        return () => {
            if (contract) {
                contract.removeAllListeners(contract.filters.VotingLocked());
                contract.removeAllListeners(contract.filters.VotingReset());
            }
        };
    }, [contract, setVotingLocked]);

    return votingLocked;
};
