import { Link } from 'react-router-dom'
import ToggleButton from "../components/themes/toggle_button";
import React, { useCallback, useEffect, useState } from "react";
import {
  setThemePreference,
  getThemePreference,
} from "../components/themes/theme";

function Navbar() {


  const [userTheme, setUserTheme] = useState("");

  const applyTheme = useCallback((theme: any) => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
  }, []);

  useEffect(() => {
    const themeFromLocalStorage = getThemePreference();
    const defaultTheme = "light"; // Set your default theme here

    // Use the theme from local storage if available, or set the default theme
    const initialTheme = themeFromLocalStorage || defaultTheme;

    setUserTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = userTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    setThemePreference(newTheme);
    setUserTheme(newTheme);
  }, [userTheme, applyTheme]);

  useEffect(() => {
    const themeFromLocalStorage = getThemePreference();
    const defaultTheme = "light";

    const initialTheme = themeFromLocalStorage || defaultTheme;

    applyTheme(initialTheme);
    setUserTheme(initialTheme);
  }, [applyTheme]);

return (

<header
        className={`bg-emerald-900 text-stone-200 py-8 theme-${userTheme}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="./landing_page">
            <h1 className="text-4xl font-bold">Admin Portal</h1>
            </a>
            <p className="mt-2 text-lg">
              Manage all your admin tasks in a single place.
            </p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="./Announcements">Announcements</a>
              </li>
              <li>
                <a href="./HomePage">Cards Home</a>
              </li>
              <li>
                <a href="./EditModal">Edit</a>
              </li>
              <li>
                <a href="./Login">Login</a>
              </li><li>
                <a href="./SignUp">SignUp</a>
              </li>
              <li>
                <ToggleButton onChange={toggleTheme} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
  
)
    

}

export default Navbar;