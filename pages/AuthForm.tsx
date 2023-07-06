// components/AuthForm.tsx

import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react';
import { SUPABASE_API_KEY, SUPABASE_URL } from '../services/supabaseClients';

type AuthFormProps = {
  onAuthenticated: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticated }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const supabase = createClient(SUPABASE_URL as string, SUPABASE_API_KEY as string);

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

  return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && (
            <div>
              <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
        )}
      </>
  );
};

export default AuthForm;
