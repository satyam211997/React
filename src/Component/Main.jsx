import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import { useEffect, useState } from "react";
import { ThemeProvider } from "../Context/Them";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <div>There is no page found</div>,
  },
]);
const Main = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider value={theme}>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button> : {theme}
        </div>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default Main;
