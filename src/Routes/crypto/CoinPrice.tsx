import { useQuery } from "@tanstack/react-query";
import { nomadTicker } from "../../api/cypto";
import { IData } from "../../sharetype";
import styled from "styled-components";

interface priceProps {
  coinId: string;
}

const PriceBox = styled.div`
  text-align: center;

  h1 {
    color: rgba(140, 0, 140, 1);
  }
`;

const PriceInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 2px 10px;
`;

const PrcieInfo = styled.div`
  margin: 2px 10px;
`;

function CoinPrice({ coinId }: priceProps) {
  const { isLoading, data } = useQuery<IData[]>(["coinTicker"], () =>
    nomadTicker(coinId)
  );

  const dataDate = data
    ? data?.map((e) => [
        new Date(e.time_close).getHours().toString().padStart(2, "0"),
        new Date(e.time_close).getMinutes().toString().padStart(2, "0"),
        new Date(e.time_close).getSeconds().toString().padStart(2, "0"),
      ])
    : "";

  return (
    <PriceBox>
      {isLoading ? (
        <h1>"Loading..."</h1>
      ) : (
        <>
          <h1>{coinId} Price</h1>
          <hr />
          <PriceInfoBox>
            <PrcieInfo>
              <h2>시간</h2>
            </PrcieInfo>
            <PrcieInfo>
              <h2>가격(ETH/USD)</h2>
            </PrcieInfo>
            <PrcieInfo>
              <h2>대비</h2>
            </PrcieInfo>
          </PriceInfoBox>
          <hr />
          {data?.map((e, index) => (
            <PriceInfoBox key={index}>
              <PrcieInfo>
                <p>
                  {dataDate[index][0]}:{dataDate[index][1]}:{dataDate[index][2]}
                </p>
              </PrcieInfo>
              <PrcieInfo>
                <p>${e.close}</p>
              </PrcieInfo>
              <PrcieInfo>
                <p>{(parseFloat(e.close) - parseFloat(e.open)).toFixed(2)}</p>
              </PrcieInfo>
            </PriceInfoBox>
          ))}
        </>
      )}
    </PriceBox>
  );
}

export default CoinPrice;
