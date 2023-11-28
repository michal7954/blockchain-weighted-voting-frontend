import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import { useMemo } from "react";
import { CompleteVotingRecords } from "types/contractTypes";

const chartSetting = {
    yAxis: [
        {
            label: "Result [%]",
        },
    ],
    width: 600,
    height: 400,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "translate(-10px, 0)",
        },
    },
};

const valueFormatter = (value: number) => `${value}%`;

interface ResultsChartPropsType {
    votingRecords: CompleteVotingRecords;
}

export default function ResultsChart({ votingRecords }: ResultsChartPropsType) {
    const percentageRecords = useMemo(() => {
        const sum = votingRecords.reduce(
            (accumulator, record) => accumulator + record.result,
            BigInt(0)
        );
        return votingRecords.map((record) => ({
            name: record.name,
            percentageResult:
                Number((record.result * BigInt(10000)) / sum) / 100,
        }));
    }, [votingRecords]);

    return (
        <div className="results-chart">
            <BarChart
                dataset={percentageRecords}
                xAxis={[{ scaleType: "band", dataKey: "name" }]}
                series={[{ dataKey: "percentageResult", valueFormatter }]}
                {...chartSetting}
            />
        </div>
    );
};
