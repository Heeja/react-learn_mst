import { useOutletContext } from "react-router-dom";

interface IuserName {
  name: string;
}

function Price() {
  const { name } = useOutletContext<IuserName>();
  return (
    <div>
      <h1>Coin {name}의 price info</h1>
    </div>
  );
}

export default Price;
