import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";

import { CoinInfo } from "../../sharetype";

import { fetchCoinInfo } from "../../api/cypto";
import { Link, Route, Routes, useParams } from "react-router-dom";
import CoinChart from "./CoinChart";

const BigBox = styled.div`
  width: 80wh;
  height: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const InfoBox = styled.div`
    width: 70%;
    margin: 10px 0;
    display; flex;
    border: solid rgba(0, 115, 70, 1) 0.5px;
    text-align: center;
    
    div {
        display: flex;
        justify-content: space-around;
        margin: 5px 10px;
        span {
            width: 30%;
            margin: 0px 4px;
        }
    }
    hr {
        border-color: rgba(0, 115, 70, 1);
    }
`;

const TextBox = styled.div`
  width: 70%;
  margin: 20px 0;
  text-align: center;

  div {
    display: flex;
    justify-content: space-around;
    margin: 5px 10px;
    span {
      width: 30%;
      margin: 0px 4px;
    }
  }
`;

const GraphBox = styled.div`
  width: 70%;
  margin: 20px 0;
  border: solid rgba(0, 115, 70, 1) 0.5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: space-around;
    margin: 5px 10px;
    span {
      width: 30%;
      margin: 0px 4px;
    }
  }
`;

const BtnLink = styled(Link)`
  width: 70px;
  height: 20px;
  border: solid rgba(60, 60, 60, 1) 0.5px;
  font-size: 12px;
  text-align: center;
`;

function Cointicker() {
  const { coinId } = useParams();

  const { isLoading: tickersLoading, data: tickersData } = useQuery<CoinInfo>(
    ["tickers", coinId],
    () => fetchCoinInfo(coinId!)
  );

  return (
    <>
      {tickersLoading ? (
        <BigBox>
          <h1>Loading...</h1>
        </BigBox>
      ) : (
        <BigBox>
          <h1>{tickersData?.name} Infomation</h1>
          <InfoBox>
            <div>
              <span>name</span>
              <span>symbol</span>
              <span>Rank</span>
            </div>
            <hr />
            <div>
              <span>{tickersData?.name}</span>
              <span>{tickersData?.symbol}</span>
              <span>{tickersData?.rank}</span>
            </div>
          </InfoBox>

          <TextBox>
            <div>
              <h3>{tickersData?.description}</h3>
            </div>
          </TextBox>

          <BtnLink to={"chart"} state={tickersData}>
            Chart
          </BtnLink>

          <GraphBox>
            <Routes>
              <Route path={"chart"} element={<CoinChart coinId={coinId!} />} />
            </Routes>
          </GraphBox>
        </BigBox>
      )}
    </>
  );
}

export default React.memo(Cointicker);
