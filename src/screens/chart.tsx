import { useOutletContext } from "react-router-dom";

interface IuserName {
  name: string;
}

function Chart() {
  const { name } = useOutletContext<IuserName>();
  return (
    <div>
      <h1>Coin {name}의 Chart</h1>
    </div>
  );
}

export default Chart;
