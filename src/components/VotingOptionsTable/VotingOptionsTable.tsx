import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import VotingOption from "components/VotingOption/VotingOption";
import { VotingStatus } from "enums/VotingStatus";
import { VotingRecords } from "types/contractTypes";

interface VotingOptionsTablePropsType {
    votingRecords: VotingRecords,
    votingStatus: VotingStatus;
}

export default function VotingOptionsTable({
    votingStatus,
    votingRecords,
}: VotingOptionsTablePropsType) {
    return (
        <TableContainer component={Paper} className="voting-options">
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
                <TableBody>
                    {votingRecords.map((votingRecord, index) => (
                        <VotingOption
                            key={index}
                            name={votingRecord.name}
                            index={index}
                            result={votingRecord.result}
                            votingStatus={votingStatus}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
