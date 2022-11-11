import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { coins } from "../db/data";

const TopBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TopFirstBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 320px;
  height: 60px;
  background-color: #8458bf;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  padding: 2px 5px;
  border-radius: 6px;

  p {
    align-self: center;
    margin: 0 10px;
    font-size: 12px;
    color: white;
  }
`;
const TopSecondBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 320px;
  height: 60px;
  background-color: #8458bf;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  padding: 2px 5px;
  border-radius: 6px;

  p {
    align-self: center;
    margin: 0 10px;
    font-size: 12px;
    color: white;
  }
`;

const OptionBox = styled.div`
  background-color: rgba(72, 175, 201, 0.5);
  border-radius: 3px;
  padding: 2px 5px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

function Users() {
  const { userId } = useParams();

  const numberParams = Number(userId);

  return (
    <>
      <TopBox>
        <h1>{coins[numberParams - 1].name}</h1>
        <TopFirstBox>
          <p>RANK:</p>
          <p>SYMBOL:</p>
          <p>OPEN SOURCE:</p>

          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
        </TopFirstBox>
        <div>
          <h3>Coins Info</h3>
        </div>
        <TopSecondBox>
          <p>TOTAL SUPLY:</p>
          <p>MAX SUPLY:</p>
          <p>{}</p>
          <p>{}</p>
        </TopSecondBox>
      </TopBox>
      <OptionBox>
        <Link to="chart">Chart</Link>
        <Link to="price">Price</Link>
      </OptionBox>
      <Outlet context={{ name: coins[numberParams - 1].name }} />
    </>
  );
}

export default Users;
