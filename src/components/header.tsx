import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopHeader = styled.header`
  margin: 5px 0;
`;

function Header() {
  const navigate = useNavigate();

  const onHomeLink = () => {
    navigate("/");
  };

  return (
    <TopHeader>
      <button onClick={onHomeLink}>Home</button>
    </TopHeader>
  );
}

export default Header;
