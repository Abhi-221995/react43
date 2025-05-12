import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  const location = useLocation();
  const userName = location.state?.name;
  return (
    <>
      <h3>User Details : {userId}</h3>

      {userName && <h2>{userName}</h2>}
    </>
  );
};

export default UserDetail;
