import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Pagenotfound from "./pages/Pagenotfound";
import Sidebar from "./component/Sidebar";
import Login from "./loginpage/Login";
import Header from "./component/Header";
import Worldwide from "./pages/Worldwide";
import Users from "./pages/Users";
import Setup from "./pages/Setup";
import Email from "./pages/Email";
import Reports from "./pages/Reports";

function Layout() {
  return (
    <div>
      <Header />
      <div className="" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="worldwide" element={<Worldwide />} />
          <Route path="users" element={<Users />} />
          <Route path="setup" element={<Setup />} />
          <Route path="email" element={<Email />} />
          <Route path="report" element={<Reports />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
