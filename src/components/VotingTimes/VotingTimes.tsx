import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Stack,
    useTheme,
} from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import { VotingStatus } from "enums/VotingStatus";

interface VotingTimesPropsType {
    votingTimes: [Date, Date];
    votingStatus: VotingStatus;
}

export default function VotingTimes({
    votingTimes,
    votingStatus,
}: VotingTimesPropsType) {
    const theme = useTheme();

    return (
        <List
            sx={{
                width: "100%",
            }}
            className="voting-times"
            component={Stack}
            direction="row"
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        sx={{
                            bgcolor:
                                votingStatus === VotingStatus.Voting
                                    ? theme.palette.success.main
                                    : undefined,
                        }}
                    >
                        <PlayCircleFilledWhiteOutlinedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    secondary="Start time"
                    primary={votingTimes[0].toLocaleString()}
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        sx={{
                            bgcolor:
                                votingStatus === VotingStatus.AfterVotingLock
                                    ? theme.palette.info.main
                                    : undefined,
                        }}
                    >
                        <StopCircleOutlinedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    secondary="End time"
                    primary={votingTimes[1].toLocaleString()}
                />
            </ListItem>
        </List>
    );
}
