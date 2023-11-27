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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Fullname"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />

        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;