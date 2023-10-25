"use strict";
exports.__esModule = true;
var react_1 = require("react");
var theme_1 = require("../components/themes/theme");
var toggle_button_1 = require("../components/themes/toggle_button");
function LandingPage() {
    var _a = react_1.useState(""), userTheme = _a[0], setUserTheme = _a[1];
    var applyTheme = react_1.useCallback(function (theme) {
        document.documentElement.classList.remove("theme-light", "theme-dark");
        document.documentElement.classList.add("theme-" + theme);
    }, []);
    react_1.useEffect(function () {
        var themeFromLocalStorage = theme_1.getThemePreference();
        var defaultTheme = "light"; // Set your default theme here
        // Use the theme from local storage if available, or set the default theme
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
    react_1.useEffect(function () {
        var themeFromLocalStorage = theme_1.getThemePreference();
        var defaultTheme = "light";
        var initialTheme = themeFromLocalStorage || defaultTheme;
        applyTheme(initialTheme);
        setUserTheme(initialTheme);
    }, [applyTheme]);
    return (react_1["default"].createElement("div", { className: "min-h-screen" },
        react_1["default"].createElement("header", { className: "bg-emerald-900 text-stone-200 py-8 theme-" + userTheme },
            react_1["default"].createElement("div", { className: "container mx-auto flex justify-between items-center" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", { className: "text-4xl font-bold" }, "Admin Portal"),
                    react_1["default"].createElement("p", { className: "mt-2 text-lg" }, "Manage all your admin tasks in a single place.")),
                react_1["default"].createElement("nav", null,
                    react_1["default"].createElement("ul", { className: "flex space-x-6" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./Announcements" }, "Announcements")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./HomePage" }, "Cards Home")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./EditModal" }, "Edit")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(toggle_button_1["default"], { onChange: toggleTheme })))))),
        react_1["default"].createElement("main", { className: "bg-" + userTheme + "-primary container mx-auto py-16" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold" }, "Get Started"),
                react_1["default"].createElement("p", { className: "mt-4 text-gray-600" }, "Sign in to access your admin dashboard.")),
            react_1["default"].createElement("div", { className: "mt-8 flex justify-center" },
                react_1["default"].createElement("a", { href: "./Login", className: "bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition duration-300" }, "Sign In")))));
}
exports["default"] = LandingPage;
