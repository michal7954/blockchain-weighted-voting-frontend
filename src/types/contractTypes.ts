import { BigNumber } from "@ethersproject/bignumber";

export type VotingResults = Array<[string, BigNumber]>;

export type VotingRecords = Array<{
    name: string;
    result: bigint | null;
}>;

export type CompleteVotingRecords = Array<{
    name: string;
    result: bigint;
}>;
