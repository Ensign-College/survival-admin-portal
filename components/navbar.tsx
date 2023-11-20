import ToggleButton from "../components/themes/toggle_button";
import React, { useCallback, useEffect, useState } from "react";
import {
  setThemePreference,
  getThemePreference,
} from "../components/themes/theme";

function Navbar() {
  const [userTheme, setUserTheme] = useState("");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const applyTheme = useCallback((theme: any) => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
  }, []);

  useEffect(() => {
    const themeFromLocalStorage = getThemePreference();
    const defaultTheme = "light";

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

  const handleMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className={`bg-emerald-900 text-stone-200 py-8 theme-${userTheme}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-4">
          <a href="./HomePage">
            <h1 className="text-4xl font-bold">Admin Portal</h1>
          </a>
        </div>
        <nav className="hidden md:flex">
          {/* Render the menu for web screens */}
          <ul className="flex space-x-6">
            <li>
              <a href="./Announcements">Announcements</a>
            </li>
            <li>
              <a href="./HomePage">Home</a>
            </li>
            {/* Other menu items */}
            <li>
              <ToggleButton onChange={toggleTheme} />
            </li>
          </ul>
        </nav>
        {/* Add a dropdown menu button for mobile screens */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white p-2 focus:outline-none"
          >
            <img src="/assets/menu.svg" className="w-10 mr-4" alt="Logo" />
          </button>
        </div>
      </div>
      {/* Add the mobile dropdown menu */}
      {/* Use conditional rendering based on the mobile menu toggle state */}
      {mobileMenuVisible && (
        <div className="md:hidden ml-4 bg-emerald-900 text-stone-200 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="./Announcements">Announcements</a>
            </li>
            <li>
              <a href="./HomePage">Home</a>
            </li>
            {/* Other menu items */}
            <li>
              <ToggleButton onChange={toggleTheme} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

// import ToggleButton from "../components/themes/toggle_button";
// import React, { useCallback, useEffect, useState } from "react";
// import {
//   setThemePreference,
//   getThemePreference,
// } from "../components/themes/theme";

// function Navbar() {
//   const [userTheme, setUserTheme] = useState("");

//   const applyTheme = useCallback((theme: any) => {
//     document.documentElement.classList.remove("theme-light", "theme-dark");
//     document.documentElement.classList.add(`theme-${theme}`);
//   }, []);

//   useEffect(() => {
//     const themeFromLocalStorage = getThemePreference();
//     const defaultTheme = "light"; // Set your default theme here

//     // Use the theme from local storage if available, or set the default theme
//     const initialTheme = themeFromLocalStorage || defaultTheme;

//     setUserTheme(initialTheme);
//     applyTheme(initialTheme);
//   }, [applyTheme]);

//   const toggleTheme = useCallback(() => {
//     const newTheme = userTheme === "light" ? "dark" : "light";
//     applyTheme(newTheme);
//     setThemePreference(newTheme);
//     setUserTheme(newTheme);
//   }, [userTheme, applyTheme]);

//   useEffect(() => {
//     const themeFromLocalStorage = getThemePreference();
//     const defaultTheme = "light";

//     const initialTheme = themeFromLocalStorage || defaultTheme;

//     applyTheme(initialTheme);
//     setUserTheme(initialTheme);
//   }, [applyTheme]);

//   return (
//     <header className={`bg-emerald-900 text-stone-200 py-8 theme-${userTheme}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <a href="./landing_page">
//             <h1 className="text-4xl font-bold">Admin Portal</h1>
//           </a>
//           <p className="mt-2 text-lg">
//             Manage all your admin tasks in a single place.
//           </p>
//         </div>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <a href="./Announcements">Announcements</a>
//             </li>
//             <li>
//               <a href="./HomePage">Home</a>
//             </li>
//             {/* <li>
//                 <a href="./EditModal">Edit</a>
//               </li> */}
//             <li>
//               <ToggleButton onChange={toggleTheme} />
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
