import useContract from "infrastructure/useContract";
import { useState, useCallback, useEffect } from "react";

export default function useVotingOptions (votingLocked: boolean) {
    const contract = useContract();
    const [votingOptions, setVotingOptions] = useState<Array<string>>([]);

    const loadVotingOptions = useCallback(async () => {
        if (!contract) return;
        const response = (await contract.getVotingOptions()) as Array<string>;
        setVotingOptions(response);
    }, [contract]);

    useEffect(() => {
        if (votingLocked) {
            loadVotingOptions();
        } else {
            setVotingOptions([]);
        }
    }, [loadVotingOptions, votingLocked]);

    return votingOptions;
};
