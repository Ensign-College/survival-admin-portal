// components/AuthForm.tsx

import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react';
import { SUPABASE_API_KEY, SUPABASE_URL } from '../services/supabaseClients';

type AuthFormProps = {
    onAuthenticated: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticated }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogin = async () => {
    const supabase = createClient(SUPABASE_URL as string, SUPABASE_API_KEY as string);
    const email = window.prompt('Enter your email:');
    const password = window.prompt('Enter your password:');

    if (email && password) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setLoading(false);
      } else {
        onAuthenticated();
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return <>{loading && <div>Loading...</div>}</>;
};

export default AuthForm;
