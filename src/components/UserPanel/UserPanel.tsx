import "./UserPanel.scss";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import useContract from "infrastructure/useContract";
import { useEffect } from "react";
import useVotingLocked from "hooks/useVotingLocked";
import useVotingResults from "hooks/useVotingResults";
import useVotingStatus from "hooks/useVotingStatus";
import useVotingTimes from "hooks/useVotingTimes";
import useVotingOptions from "hooks/useVotingOptions";
import { VotingStatus } from "enums/VotingStatus";
import ResultsChart from "components/ResultsChart/ResultsChart";
import Alert from "@mui/material/Alert";
import { Button, Chip } from "@mui/material";
import VotingOptionsTable from "components/VotingOptionsTable/VotingOptionsTable";
import VotingTimes from "components/VotingTimes/VotingTimes";
import useDynamicHeightChange from "hooks/useDynamicHeightChange";
import { CompleteVotingRecords } from "types/contractTypes";
import useVotingRecords from "hooks/useVotingRecords";

export default function UserPanel() {
    const { chainId, account } = useWeb3React<Web3Provider>();
    const contract = useContract();
    const votingTimes = useVotingTimes();
    const votingLocked = useVotingLocked();
    const votingStatus = useVotingStatus(votingLocked, votingTimes);
    const votingOptions = useVotingOptions(votingLocked);
    const results = useVotingResults(votingTimes[1], votingStatus);
    const votingRecords = useVotingRecords(votingOptions, results);
    const { containerRef, contentRef } = useDynamicHeightChange();
 
    useEffect(() => {
        // console.log(votingStatus);
    }, [votingStatus]);

    return (
        <div className="user-panel" ref={containerRef}>
            <div className="user-panel__content" ref={contentRef}>
                <div className="wallet-info">
                    <Chip label={`Chain ID: ${chainId}`} />
                    <Chip label={`Account: ${account}`} />
                </div>
                <div className="voting-status">
                    {votingLocked ? (
                        <Alert severity="success">
                            Voting has been locked.
                        </Alert>
                    ) : (
                        <Alert severity="warning">
                            Voting is not yet locked!
                        </Alert>
                    )}
                </div>
                <VotingTimes
                    votingTimes={votingTimes}
                    votingStatus={votingStatus}
                />
                {votingLocked && (
                    <VotingOptionsTable
                        votingRecords={votingRecords}
                        votingStatus={votingStatus}
                    />
                )}
                {votingStatus === VotingStatus.AfterVotingLock && !results && (
                    <div className="get-results">
                        <Button
                            onClick={() => contract?.getResults()}
                            variant="contained"
                        >
                            GET RESULTS
                        </Button>
                    </div>
                )}
                {votingStatus === VotingStatus.AfterVotingLock && results && (
                    <ResultsChart
                        votingRecords={votingRecords as CompleteVotingRecords}
                    />
                )}
            </div>
        </div>
    );
}
