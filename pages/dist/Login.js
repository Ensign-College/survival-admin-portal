"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var Login = function (props) {
    return (react_1["default"].createElement("div", { className: "h-screen flex" },
        react_1["default"].createElement("div", { className: "w-1/2 bg-white flex flex-col justify-center" },
            react_1["default"].createElement("div", { className: "text-center p-10" },
                react_1["default"].createElement("img", { src: "/assets/logo.png", className: "max-w-full max-h-full mr-4", alt: "Logo" }))),
        react_1["default"].createElement("form", { className: "w-1/2", style: { backgroundColor: "#006241" }, onSubmit: function () { } },
            " ",
            react_1["default"].createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                " ",
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold mb-2 text-white text-center" }, "Sign In"),
                " ",
                react_1["default"].createElement("div", { className: "space-y-4 w-6/12 " },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 text-white" }, "Email"),
                        react_1["default"].createElement("input", { type: "email", id: "email", name: "email", onChange: function () { }, className: "w-full border rounded-md py-2 px-3", placeholder: "Enter your email", required: true })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 text-white" }, "Password"),
                        react_1["default"].createElement("input", { type: "password", id: "password", name: "password", onChange: function () { }, className: "w-full border rounded-md py-2 px-3", placeholder: "Enter your password", required: true })),
                    react_1["default"].createElement("div", { className: "text-center" },
                        " ",
                        react_1["default"].createElement("button", { type: "submit", className: "w-full bg-[#006241] text-white font-semibold py-2 rounded-md hover:bg-blue-600 border border-white" }, "Sign In")))))));
};
exports["default"] = Login;
