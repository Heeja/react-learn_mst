import { useOutletContext } from "react-router-dom";

interface IuserName {
  name: string;
}

function Followers() {
  const { name } = useOutletContext<IuserName>();
  return (
    <div>
      <h1>User {name}의 followers</h1>
    </div>
  );
}

export default Followers;
