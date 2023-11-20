"use strict";
exports.__esModule = true;
var toggle_button_1 = require("../components/themes/toggle_button");
var react_1 = require("react");
var theme_1 = require("../components/themes/theme");
function Navbar() {
    var _a = react_1.useState(""), userTheme = _a[0], setUserTheme = _a[1];
    var _b = react_1.useState(false), mobileMenuVisible = _b[0], setMobileMenuVisible = _b[1];
    var applyTheme = react_1.useCallback(function (theme) {
        document.documentElement.classList.remove("theme-light", "theme-dark");
        document.documentElement.classList.add("theme-" + theme);
    }, []);
    react_1.useEffect(function () {
        var themeFromLocalStorage = theme_1.getThemePreference();
        var defaultTheme = "light";
        var initialTheme = themeFromLocalStorage || defaultTheme;
        setUserTheme(initialTheme);
        applyTheme(initialTheme);
    }, [applyTheme]);
    var toggleTheme = react_1.useCallback(function () {
        var newTheme = userTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        theme_1.setThemePreference(newTheme);
        setUserTheme(newTheme);
    }, [userTheme, applyTheme]);
    var handleMenuToggle = function () {
        setMobileMenuVisible(!mobileMenuVisible);
    };
    return (react_1["default"].createElement("header", { className: "bg-emerald-900 text-stone-200 py-8 theme-" + userTheme },
        react_1["default"].createElement("div", { className: "container mx-auto flex justify-between items-center" },
            react_1["default"].createElement("div", { className: "ml-4" },
                react_1["default"].createElement("a", { href: "./HomePage" },
                    react_1["default"].createElement("h1", { className: "text-4xl font-bold" }, "Admin Portal"))),
            react_1["default"].createElement("nav", { className: "hidden md:flex" },
                react_1["default"].createElement("ul", { className: "flex space-x-6" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "./Announcements" }, "Announcements")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "./HomePage" }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(toggle_button_1["default"], { onChange: toggleTheme })))),
            react_1["default"].createElement("div", { className: "md:hidden" },
                react_1["default"].createElement("button", { onClick: handleMenuToggle, className: "text-white p-2 focus:outline-none" },
                    react_1["default"].createElement("img", { src: "/assets/menu.svg", className: "w-10 mr-4", alt: "Logo" })))),
        mobileMenuVisible && (react_1["default"].createElement("div", { className: "md:hidden ml-4 bg-emerald-900 text-stone-200 py-2" },
            react_1["default"].createElement("ul", { className: "flex flex-col space-y-2" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "./Announcements" }, "Announcements")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "./HomePage" }, "Home")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(toggle_button_1["default"], { onChange: toggleTheme })))))));
}
exports["default"] = Navbar;
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
