import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { paprikaInfo } from "../../api/cypto";
import { Link } from "react-router-dom";

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const CoinsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  align-items: center;

  h1 {
    font-size: 24px;
    font-align: center;
    margin-bottom: 10px;
  }
`;
const LinkBox = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 3fr;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  margin: 10px 0;

  span {
    margin: 0 5px;
    text-align: center;
    min-width: 100px;
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>(["allCoins"], () =>
    paprikaInfo()
  );

  return (
    <>
      <CoinsBox>
        <div>
          <h1>Coin List</h1>
        </div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data?.slice(0, 100).map((x) => (
              <LinkBox key={x.id} to={`/coins/${x.id}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${x.symbol.toLowerCase()}`}
                />
                <span>{x.symbol}</span>
                <span>{x.name}</span>
              </LinkBox>
            ))}
          </>
        )}
      </CoinsBox>
    </>
  );
}

export default Coins;
