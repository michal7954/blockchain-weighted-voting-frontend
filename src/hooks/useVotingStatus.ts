import { VotingStatus } from "enums/VotingStatus";
import { useCallback, useEffect, useState } from "react";

const useVotingStatus = (votingLocked: boolean, votingTimes: [Date, Date]) => {
    const [votingStatus, setVotingStatus] = useState<VotingStatus>(
        VotingStatus.Configuration
    );

    const updateVotingStatus = useCallback(() => {
        const currentTime = new Date();
        if (!votingLocked) {
            setVotingStatus(VotingStatus.Configuration);
        } else if (currentTime < votingTimes[0]) {
            setVotingStatus(VotingStatus.BeforeVotingLock);
        } else if (currentTime > votingTimes[1]) {
            setVotingStatus(VotingStatus.AfterVotingLock);
        } else {
            setVotingStatus(VotingStatus.Voting);
        }
    }, [votingLocked, votingTimes]);

    useEffect(updateVotingStatus, [updateVotingStatus]);

    useEffect(() => {
        const currentTime = new Date();

        const startTimeoutValue =
            votingTimes[0].getTime() - currentTime.getTime();
        const endTimeoutValue =
            votingTimes[1].getTime() - currentTime.getTime();

        let startTimeout: NodeJS.Timeout | undefined,
            endTimeout: NodeJS.Timeout | undefined;

        if (startTimeoutValue > 0) {
            startTimeout = setTimeout(updateVotingStatus, startTimeoutValue);
        }

        if (endTimeoutValue > 0) {
            endTimeout = setTimeout(updateVotingStatus, endTimeoutValue);
        }

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(endTimeout);
        };
    }, [votingTimes, updateVotingStatus]);

    return votingStatus;
};

export default useVotingStatus;
