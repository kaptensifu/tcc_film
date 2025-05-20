import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
// import axios from 'axios';
// import { BASE_URL } from '../utils';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${BASE_URL}/login`, { username, password });
  //     navigate('/films');
  //   } catch (err) {
  //     alert('Login gagal!');
  //   }
  // };

  return (
    <section className="hero is-fullheight has-background-dark">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop is-6-tablet">
              <div className="box has-shadow" style={{
                backgroundColor: "#6a0dad", 
                border: "1px solid #1a1a1a", 
                color: "#fff", // teks putih
              }}>
                <h1 className="title has-text-centered has-text-white mb-5">🎬 Film Rating App</h1>
                <form>
                  <div className="field">
                    <label className="label has-text-white">Username</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                  Belum punya akun? <a href="#">Daftar di sini</a>
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
