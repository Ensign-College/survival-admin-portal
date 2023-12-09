import React, { useState } from 'react';
import { supabase } from '../services/supabaseClients';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  console.log(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      alert('Check your email for verification link');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen flex">
  <div className="w-1/2 bg-white flex flex-col justify-center">
    <div className="text-center p-10">
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
    onSubmit={handleSubmit}
  >
    <div className="h-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-2 text-white text-center">
        Sign Up
      </h2>{" "}
      <div className="space-y-4 w-6/12 ">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 text-white"
          >
            Fullname
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            className="w-full border rounded-md py-2 px-3"
            placeholder="Enter your fullname"
            required
          />
        </div>
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
            onChange={handleChange}
            value={formData.email}
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
            onChange={handleChange}
            value={formData.password}
            className="w-full border rounded-md py-2 px-3"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#006241] text-white font-semibold py-2 rounded-md hover:bg-blue-600 border border-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
  );
};

export default SignUp;