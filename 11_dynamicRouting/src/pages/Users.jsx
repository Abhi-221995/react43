import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  // array of object
  // const users = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Mohan" },
  //   { id: 3, name: "Raven" },
  //   { id: 4, name: "Clever" },
  // ];

  
  

  return (
    <>
      <h2>User Details</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={{ name: user.name }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
