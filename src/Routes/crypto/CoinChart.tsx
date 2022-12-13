import React from "react";
import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";

import { nomadTicker } from "../../api/cypto";
import { IData } from "../../sharetype";

interface ChartProps {
  coinId: string;
}

function CoinChart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IData[]>(["coinTicker"], () =>
    nomadTicker(coinId)
  );

  const seriesData = data?.map((sedata) => [
    sedata.time_close,
    [sedata.open, sedata.high, sedata.low, sedata.close],
  ]);

  //   const chartSrc = {
  //     series: [
  //       {
  //         data: seriesData,
  //       },
  //     ],
  //     options: {
  //       chart: {
  //         type: "candlestick",
  //       },
  //       title: {
  //         text: "CandleStick Chart",
  //         align: "left",
  //       },
  //       xaxis: {
  //         type: "datetime",
  //       },
  //       yaxis: {
  //         tooltip: {
  //           enabled: true,
  //         },
  //       },
  //     },
  //   };

  const haha:
    | {
        data: (Date | number[])[];
      }[]
    | unknown = data?.map((chartsrc) => {
    return {
      data: [
        chartsrc.time_close,
        [
          parseInt(chartsrc.open),
          parseInt(chartsrc.high),
          parseInt(chartsrc.low),
          parseInt(chartsrc.close),
        ],
      ],
    };
  });

  console.log(haha);

  return (
    <>
      {isLoading ? (
        <h1>"Loading..."</h1>
      ) : (
        // <ApexCharts
        //   type="candlestick"
        //   options={{
        //     chart: {
        //       type: "candlestick",
        //     },
        //     title: {
        //       text: `${coinId} Chart`,
        //       align: "left",
        //     },
        //     xaxis: {
        //       type: "datetime",
        //     },
        //     yaxis: {
        //       tooltip: {
        //         enabled: true,
        //       },
        //     },
        //   }}
        //   series={haha}
        // />
        ""
      )}
    </>
  );
}

export default CoinChart;
