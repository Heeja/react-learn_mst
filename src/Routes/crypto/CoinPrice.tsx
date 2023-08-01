import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { ChartInfo } from "../../api/cypto";
import { IUpbitDays, CoinTickerProps } from "../../sharetype";

// styled
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

const PrcieInfo = styled.div<{ price?: number }>`
  margin: 2px 10px;
  color: ${(props) => {
    if (!props.price) return "";
    if (props.price && props.price < 0) return "tomato";
    if (props.price && props.price > 0) return "cornflowerblue";
  }};
`;

function CoinPrice() {
  const { symbol } = useOutletContext<CoinTickerProps>();
  const { isLoading, data } = useQuery<IUpbitDays[]>(["daysPrices"], () => {
    if (symbol === "USDT") return ChartInfo("USDT-BTC", 30);
    return ChartInfo(`KRW-${symbol}`, 30);
  });

  const dataDate = data
    ? data.map((e) => {
        const formatDate = new Date(e.candle_date_time_kst);
        const dateData = new Intl.DateTimeFormat("ko-KR", {
          weekday: "short",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(formatDate);
        return dateData;
      })
    : "";

  return (
    <PriceBox>
      {isLoading ? (
        <h1>"Loading..."</h1>
      ) : (
        <>
          <h1>{symbol} Price</h1>
          <hr />
          <PriceInfoBox>
            <PrcieInfo>
              <h2>시간</h2>
            </PrcieInfo>
            <PrcieInfo>
              <h2>
                가격({symbol === "USDT" ? "USD" : "KRW"}/{symbol})
              </h2>
            </PrcieInfo>
            <PrcieInfo>
              <h2>대비</h2>
            </PrcieInfo>
          </PriceInfoBox>
          <hr />
          {data?.map((e, index) => (
            <PriceInfoBox key={index}>
              <PrcieInfo>
                <p>{dataDate[index]}</p>
              </PrcieInfo>
              <PrcieInfo price={e.trade_price}>
                <p>
                  {symbol === "USDT" ? "$" : "₩"}{" "}
                  {e.trade_price.toString().length > 3
                    ? e.trade_price.toLocaleString()
                    : e.trade_price}
                </p>
              </PrcieInfo>
              <PrcieInfo price={e.change_price}>
                <p>
                  {symbol === "USDT" ? "$" : "₩"}{" "}
                  {e.trade_price.toString().length > 3
                    ? e.trade_price.toLocaleString()
                    : e.trade_price}
                </p>
              </PrcieInfo>
            </PriceInfoBox>
          ))}
        </>
      )}
    </PriceBox>
  );
}

export default CoinPrice;
