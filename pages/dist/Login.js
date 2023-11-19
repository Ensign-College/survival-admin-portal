"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login = function (props) {
    return (react_1["default"].createElement("div", { className: "h-screen flex flex-col md:flex-row" },
        react_1["default"].createElement("div", { className: "hidden md:w-1/2 md:flex bg-white flex-col justify-center" },
            react_1["default"].createElement("div", { className: "text-center p-10" },
                react_1["default"].createElement("img", { src: "/assets/logo.png", className: "max-w-full max-h-full mr-4", alt: "Logo" }))),
        react_1["default"].createElement("div", { className: "w-full md:hidden bg-white flex flex-col justify-center" },
            react_1["default"].createElement("div", { className: "text-center p-10" },
                react_1["default"].createElement("img", { src: "/assets/logo.png", className: "max-w-full max-h-full mr-4", alt: "Logo" }))),
        react_1["default"].createElement("form", { className: "w-full md:w-1/2 lg:p-48 h-screen ", style: { backgroundColor: "#006241" }, onSubmit: function () { } },
            react_1["default"].createElement("div", { className: "flex flex-col md:justify-center items-center" },
                react_1["default"].createElement("h2", { className: "text-2xl mt-10 font-semibold mb-2 text-white text-center" }, "Sign In"),
                react_1["default"].createElement("div", { className: "space-y-4 w-6/12 md:w-full" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 text-white" }, "Email"),
                        react_1["default"].createElement("input", { type: "email", id: "email", name: "email", onChange: function () { }, className: "w-full border rounded-md py-2 px-3", placeholder: "Enter your email", required: true })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 text-white" }, "Password"),
                        react_1["default"].createElement("input", { type: "password", id: "password", name: "password", onChange: function () { }, className: "w-full border rounded-md py-2 px-3", placeholder: "Enter your password", required: true })),
                    react_1["default"].createElement("div", { className: "text-center" },
                        react_1["default"].createElement("button", { className: "w-full bg-[#006241] text-white font-semibold py-2 rounded-md hover:bg-white border hover:text-[#006241] border-white" },
                            react_1["default"].createElement("a", { href: "./HomePage" }, "Sign In"))))))));
};
exports["default"] = Login;
// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// interface LoginPageProps {
//   onLoginSuccess: () => void; // Callback function for successful login
//   errorMessage?: string; // Optional error message
// }
// const Login: React.FC<LoginPageProps> = (props) => {
//   return (
//     <div className="h-screen flex">
//       <div className="w-1/2 md:w-1/2 bg-white flex flex-col justify-center">
//         <div className="text-center p-10">
//           <img
//             src="/assets/logo.png"
//             className="max-w-full max-h-full mr-4"
//             alt="Logo"
//           />
//         </div>
//       </div>
//       <form
//         className="w-1/2"
//         style={{ backgroundColor: "#006241" }}
//         onSubmit={() => {}}
//       >
//         <div className="h-full flex flex-col justify-center items-center">
//           <h2 className="text-2xl font-semibold mb-2 text-white text-center">
//             Sign In
//           </h2>
//           <div className="space-y-4 w-6/12 ">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 text-white"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 onChange={() => {}}
//                 className="w-full border rounded-md py-2 px-3"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700 text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 onChange={() => {}}
//                 className="w-full border rounded-md py-2 px-3"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 //
//                 className="w-full bg-[#006241] text-white font-semibold py-2 rounded-md hover:bg-blue-600 border border-white"
//               >
//                 <a href="./HomePage">Sign In</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;
