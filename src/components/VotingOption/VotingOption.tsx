import useContract from "infrastructure/useContract";
import { useCallback } from "react";
import { VotingStatus } from "enums/VotingStatus";
import { isNftVoting } from "configuration";
import Button from "@mui/material/Button";
import { TableCell, TableRow } from "@mui/material";

interface VotingOptionPropsType {
    name: string;
    index: number;
    result: BigInt | null;
    votingStatus: VotingStatus;
}

export default function VotingOption({
    name,
    index,
    result,
    votingStatus,
}: VotingOptionPropsType) {
    const contract = useContract();

    const handleVote = useCallback(() => {
        if (!contract) return;
        if (!isNftVoting) {
            contract.vote(index);
        } else {
            const tokenId = Number(
                window.prompt(
                    "Pass ID of token that you are going to vote with"
                )
            );
            contract.vote(index, tokenId);
        }
    }, [contract, index]);

    const AdditionalElement = () => {
        switch (votingStatus) {
            case VotingStatus.Voting:
                return (
                    <Button variant="outlined" onClick={handleVote}>
                        VOTE
                    </Button>
                );
            case VotingStatus.AfterVotingLock:
                if (typeof result === "bigint") {
                    return <>Result: {result.toString()}</>;
                }
                return null;
            default:
                return null;
        }
    };

    return (
        <TableRow
            key={name}
            sx={{
                "& td, & th": {
                    fontSize: "1rem",
                },
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{
                    fontWeight: "bold",
                }}
            >
                {name}
            </TableCell>
            <TableCell align="right">
                <AdditionalElement />
            </TableCell>
        </TableRow>
    );
}
