import React, { useCallback, useEffect, useState } from "react";
import {
  setThemePreference,
  getThemePreference,
} from "../components/themes/theme";
import ToggleButton from "../components/themes/toggle_button";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";

function LandingPage() {

  return (
    <div className="min-h-screen">
      {/*page header*/}

      <Navbar></Navbar>

      {/*page body*/}
      <main className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Get Started</h2>
          <p className="mt-4 text-gray-600">
            Sign in to access your admin dashboard.
          </p>
        </div>

        {/*sign in button*/}
        <div className="mt-8 flex justify-center">
          <a
            href="./AuthForm"
            className="bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Sign In
          </a>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
