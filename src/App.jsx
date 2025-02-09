import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import useRoutes from "./routers";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const routes = useRoutes();
  console.log(routes);

  return (
    <>
    <Navbar/>
      <Routes>
        {routes.map(({ path, element: Element }) => {
          return <Route key={path} path={path} element={<Element />} />;
        })}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
