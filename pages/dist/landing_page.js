"use strict";
exports.__esModule = true;
var react_1 = require("react");
function LandingPage() {
    return (react_1["default"].createElement("div", { className: "min-h-screen" },
        react_1["default"].createElement("main", { className: "container mx-auto py-16" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold" }, "Get Started"),
                react_1["default"].createElement("p", { className: "mt-4 text-gray-600" }, "Sign in to access your admin dashboard.")),
            react_1["default"].createElement("div", { className: "mt-8 flex justify-center" },
                react_1["default"].createElement("a", { href: "./Login", className: "bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition duration-300" }, "Sign In")))));
}
exports["default"] = LandingPage;
