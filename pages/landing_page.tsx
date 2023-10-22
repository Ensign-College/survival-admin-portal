import React from "react";

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/*page header*/}
      <header className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Admin Portal</h1>
            <p className="mt-2 text-lg">
              Manage all your admin tasks in a single place.
            </p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="./EditModal">Edit</a>
              </li>
              <li>
                <a href="./HomePage">Cards Home</a>
              </li>
              <li>
                <a href="./EditModal">Edit</a>
              </li>
              <li>
                <a href="./index">Index</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
            href="./Login"
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
