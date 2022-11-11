import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onHomeLink = () => {
    navigate("/");
  };
  const onAboutLink = () => {
    navigate("/about");
  };
  return (
    <header>
      <ul>
        <li>
          <button onClick={onHomeLink}>Home</button>
        </li>
        <li>
          <button onClick={onAboutLink}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
