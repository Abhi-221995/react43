import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
