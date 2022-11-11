import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";

const BackBox = styled.div`
  width: 600px;
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Root() {
  return (
    <BackBox>
      <Header />
      <Outlet />
    </BackBox>
  );
}

export default Root;
