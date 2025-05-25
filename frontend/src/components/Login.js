import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth/AuthProvider.js";
import 'bulma/css/bulma.min.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login({ name, password });
      navigate('/films');
    } catch (err) {
      setError('Login gagal! Periksa username dan password.');
    }
  };

  return (
    <section className="hero is-fullheight has-background-dark">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop is-6-tablet">
              <div className="has-text-centered mb-4">
            <img
              src="https://storage.googleapis.com/film-app-assets/Screenshot%202025-05-25%20103739.png"
              alt="Logo film"
              style={{ width: '200px' }}
            />
          </div>
              <div className="box has-shadow" style={{
                backgroundColor: "#6a0dad",
                border: "1px solid #1a1a1a",
                color: "#fff", // teks putih
              }}>
                <h1 className="title has-text-centered has-text-white mb-5">🎬 Film Rating App</h1>
                {error && (
                  <div className="notification is-danger">
                    {error}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="field">
                    <label className="label has-text-white">Username</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Masukkan username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-white">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </div>
                  </div>

                  <div className="field mt-5">
                    <button className="button is-primary is-fullwidth" type="submit" style={{
                      backgroundColor: "#b19cd9",
                      color: "#1a1a1a",
                      fontWeight: "bold",
                      border: "none",
                    }}>
                      Login
                    </button>
                  </div>
                </form>

                <p className="has-text-centered mt-4">
                  Belum punya akun? <a href="/register" style={{ color: "#0ED1F8FF" }}>Daftar di sini</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
