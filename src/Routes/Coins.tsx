import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { marketList } from "../api/upbit";

interface ICoins {
  market: string;
  korean_name: string;
  english_name: string;
}

const CoinsBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  align-items: center;
`;

function Coins() {
  // const fetchData = marketList;
  const { isLoading, data } = useQuery<ICoins[]>(["allCoins"], () =>
    marketList()
  );

  return (
    <>
      <CoinsBox>{isLoading ? <h1>Loading...</h1> : <h1>Coins</h1>}</CoinsBox>
    </>
  );
}

export default Coins;
