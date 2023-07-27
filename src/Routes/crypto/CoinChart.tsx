import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";

import { ChartInfo, nomadTicker } from "../../api/cypto";
import { CoinTickerProps, IData, IUpbitDays } from "../../sharetype";

const ChartBox = styled.div`
  widht: 80%;
`;

function CoinChart() {
  const { coinId, symbol, themeState } = useOutletContext<CoinTickerProps>();
  const { isLoading, data } = useQuery<IData[]>(["coinTicker"], () =>
    nomadTicker(coinId)
  );

  const aa = useQuery<IUpbitDays[]>(["aa"], () => {
    if (symbol === "USDT") return ChartInfo("BTC-USDT", 30);
    return ChartInfo(`KRW-${symbol}`, 30);
  }).data;
  // console.log(aa);

  // const chartData = !data
  //   ? []
  //   : data.map((chartsrc) => [
  //       chartsrc.time_close,
  //       parseInt(chartsrc.open),
  //       parseInt(chartsrc.high),
  //       parseInt(chartsrc.low),
  //       parseInt(chartsrc.close),
  //     ]);
  const chartData = !aa
    ? []
    : aa.map((chartsrc: any) => [
        chartsrc.candle_date_time_kst,
        parseInt(chartsrc.opening_price),
        parseInt(chartsrc.high_price),
        parseInt(chartsrc.low_price),
        parseInt(chartsrc.trade_price),
      ]);

  const chartSrc = {
    series: [
      {
        data: chartData,
      },
    ],
    options: {
      title: {
        text: `${symbol} Chart`,
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
              text: `${symbol} Chart`,
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
              style: {
                fontSize: "10px",
              },
            },
          }}
          series={chartSrc.series}
        />
      )}
    </ChartBox>
  );
}

export default CoinChart;
