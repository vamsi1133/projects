import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import PubgGun from "./pages/pubggun";
import Todo from "./pages/todo";

const CustomRouter = (props) => {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/todo", element: <Todo /> },
    { path: "/pubg", element: <PubgGun /> },
  ];

  return (
    <>
      <Router>
        <Routes>
          {routes.map((val) => (
            <Route key={val.path} path={val.path} element={val.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default CustomRouter;
