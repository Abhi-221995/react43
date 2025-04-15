import PropTypes from "prop-types";

const Login = ({ isLoggedIn = true, username = "Guest" }) => {
  //   const welcomeMessage = <h1>Welcome ! {username}</h1>;

  //   const loginMessage = <h1>Please login to continue</h1>;

  //   return isLoggedIn ? welcomeMessage : loginMessage;

  return isLoggedIn ? (
    <h1>Welcome ! {username}</h1>
  ) : (
    <h1>Please login to continue</h1>
  );
};

// Login.defaultProps = {
//   isLoggedIn: true,
//   username: "Guest",
// };

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default Login;

// Not a good practice because components should return only once
//   if (isLoggedIn) {
//     return <h1>Welcome! {name}</h1>;
//   }
//   else{
//     return <h1>Please login to continue</h1>
//   }
//   return isLoggedIn ? (
//     <h1>Welcome! {name}</h1>
//   ) : (
//     <h1>Please login to continue</h1>
//   );
//   return isLoggedIn && <h1>Welcome! {name}</h1>;
