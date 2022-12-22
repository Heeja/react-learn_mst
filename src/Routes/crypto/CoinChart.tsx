import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

import { nomadTicker } from "../../api/cypto";
import { IData } from "../../sharetype";

interface ChartProps {
  coinId: string;
  themeState: boolean;
}

const ChartBox = styled.div`
  widht: 80%;
`;

function CoinChart({ coinId, themeState }: ChartProps) {
  const { isLoading, data } = useQuery<IData[]>(["coinTicker"], () =>
    nomadTicker(coinId)
  );

  const chartData = !data
    ? []
    : data.map((chartsrc) => [
        chartsrc.time_close,
        parseInt(chartsrc.open),
        parseInt(chartsrc.high),
        parseInt(chartsrc.low),
        parseInt(chartsrc.close),
      ]);

  const chartSrc = {
    series: [
      {
        data: chartData,
      },
    ],
    options: {
      title: {
        text: `${coinId} Chart`,
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        show: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <ChartBox>
      {isLoading ? (
        <h1>"Loading..."</h1>
      ) : (
        <ApexCharts
          type="candlestick"
          options={{
            title: {
              text: `${coinId} Chart`,
              align: "left",
            },
            theme: {
              mode: themeState ? "dark" : "light",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: true,
            },
            tooltip: {
              enabled: true,
            },
          }}
          series={chartSrc.series}
        />
      )}
    </ChartBox>
  );
}

export default CoinChart;
