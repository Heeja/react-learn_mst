import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db/data";

function Users() {
  const { userId } = useParams();

  const numberParams = Number(userId);

  return (
    <>
      <h1>
        User ID: {userId}, User Name: {users[numberParams - 1].name}
      </h1>
      <Link to="followers">Followers</Link>
      <Outlet context={{ name: users[numberParams - 1].name }} />
    </>
  );
}

export default Users;
