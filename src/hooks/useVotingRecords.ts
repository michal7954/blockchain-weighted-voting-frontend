import { useMemo } from "react";
import { VotingRecords } from "types/contractTypes";

export default function useVotingRecords(
    votingOptions: Array<string>,
    results: Array<bigint> | null
): VotingRecords {
    return useMemo(
        () =>
            votingOptions
                .map((option, index) => ({
                    name: option,
                    result: results ? results[index] : null,
                }))
                .filter((record) => record.name),
        [votingOptions, results]
    );
}
