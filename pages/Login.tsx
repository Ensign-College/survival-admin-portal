/* eslint-disable @next/next/no-img-element */
import React from "react";

interface LoginPageProps {
  onLoginSuccess: () => void; // Callback function for successful login
  errorMessage?: string; // Optional error message
}

const Login: React.FC<LoginPageProps> = (props) => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-white flex flex-col justify-center">
        <div className="text-center p-2">
          <img
            src="/assets/logo.png"
            className="max-w-full max-h-full mr-4"
            alt="Logo"
          />
        </div>
      </div>
      <form
        className="w-1/2"
        style={{ backgroundColor: "#006241" }}
        onSubmit={() => {}}
      >
        {" "}
        {/* Sign-in form takes the whole right side with a background color */}
        <div className="h-full flex flex-col justify-center items-center">
          {" "}
          {/* Center the content vertically in the form area */}
          <h2 className="text-2xl font-semibold mb-2 text-white text-center">
            Sign In
          </h2>{" "}
          {/* Center the "Sign In" header both horizontally and vertically */}
          <div className="space-y-4 w-6/12 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={() => {}}
                className="w-full border rounded-md py-2 px-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={() => {}}
                className="w-full border rounded-md py-2 px-3"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-center">
              {" "}
              {/* Center the content horizontally */}
              <button
                type="submit"
                className="w-full bg-[#006241] text-white font-semibold py-2 rounded-md hover:bg-blue-600 border border-white"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
