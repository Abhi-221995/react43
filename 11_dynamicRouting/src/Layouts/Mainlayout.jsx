import { Link, Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/contact">Contact</Link> |
        <Link to="/about">About</Link> |<Link to="/dashboard">Dashboard</Link> |
        <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Mainlayout;
