import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from 'react'
import { SUPABASE_API_KEY, SUPABASE_URL } from '../services/supabaseClients'

type AuthFormProps = {
  onAuthenticated: () => void
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticated }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const supabase = createClient(
    SUPABASE_URL as string,
    SUPABASE_API_KEY as string,
  )

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setLoading(false)
      } else {
        onAuthenticated()
      }
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const user = await supabase.auth.getUser()

      if (user) {
        onAuthenticated()
      } else {
        setLoading(false)
      }
    }

    checkUser()
  }, [supabase.auth, onAuthenticated])

  return (
    <div style={{ textAlign: 'center', maxWidth: '300px', margin: 'auto' }}>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div
          style={{
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthForm
