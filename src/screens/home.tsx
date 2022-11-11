import { Link } from "react-router-dom";
import styled from "styled-components";
import { coins } from "../db/data";
import { fetchCoinInfo, fetchCoins } from "../db/api";

interface RouteParams {
  coinId: string;
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

const ListBox = styled.div`
  margin-bottom: 10px;
`;

function Home() {
  const coinList = coins.map((e, index) => {
    return (
      <ListBox>
        <Link to={`/users/${e.id}`}>{e.name}</Link>
      </ListBox>
    );
  });

  return (
    <>
      <h1>Coin</h1>
      <hr />
      <div>{coinList}</div>
    </>
  );
}

export default Home;
