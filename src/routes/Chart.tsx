import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  console.log(data);

  return <h2>Chart!!</h2>;
}

export default Chart;
