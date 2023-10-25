"use strict";
exports.__esModule = true;
var react_1 = require("react");
function LandingPage() {
    return (react_1["default"].createElement("div", { className: "bg-gray-100 min-h-screen" },
        react_1["default"].createElement("header", { className: "bg-emerald-900 text-white py-8" },
            react_1["default"].createElement("div", { className: "container mx-auto flex justify-between items-center" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", { className: "text-4xl font-bold" }, "Admin Portal"),
                    react_1["default"].createElement("p", { className: "mt-2 text-lg" }, "Manage all your admin tasks in a single place.")),
                react_1["default"].createElement("nav", null,
                    react_1["default"].createElement("ul", { className: "flex space-x-6" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./HomePage" }, "Cards Home")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./EditModal" }, "Edit")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "./index" }, "Index")))))),
        react_1["default"].createElement("main", { className: "container mx-auto py-16" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold" }, "Get Started"),
                react_1["default"].createElement("p", { className: "mt-4 text-gray-600" }, "Sign in to access your admin dashboard.")),
            react_1["default"].createElement("div", { className: "mt-8 flex justify-center" },
                react_1["default"].createElement("a", { href: "./Login", className: "bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition duration-300" }, "Sign In")))));
}
exports["default"] = LandingPage;
