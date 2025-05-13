import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="/dashboard/profile">Profile</NavLink> |
        <NavLink to="/dashboard/settings">Settings</NavLink> |
        <NavLink to="/dashboard/users">Users</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Dashboard;
