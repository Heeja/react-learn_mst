import { Link } from "react-router-dom";
import { users } from "../db/data";

function Home() {
  const userList = users.map((e, index) => {
    return (
      <li>
        <Link to={`/users/${e.id}`}>{e.name}</Link>
      </li>
    );
  });

  return (
    <>
      <h1>Users</h1>
      <hr />
      {userList}
    </>
  );
}

export default Home;
