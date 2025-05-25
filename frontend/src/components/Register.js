import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../utils/AxiosInstance';
import 'bulma/css/bulma.min.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');
    const navigate = useNavigate();
    
    const saveUser = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/register", {
        name,
        email,
        password,
      });
      alert("Register berhasil! Silakan login.");
      navigate("/");      
    } catch (error) {
      console.log(error);
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
                                <h1 className="title has-text-centered has-text-white mb-5">🎬 Buat Akun</h1>
                                {error && (
                                    <div className="notification is-danger">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={saveUser}>
                                    <div className="field">
                                        <label className="label has-text-white">Username</label>
                                        <div className="control has-icons-left">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Masukkan username"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white">Email</label>
                                        <div className="control has-icons-left">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Masukkan Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
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
                                                type="text"
                                                placeholder="Masukkan password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
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
                                            Register
                                        </button>
                                    </div>
                                </form>

                                <p className="has-text-centered mt-4">
                                    Sudah punya akun? <a href="/" style={{ color: "#0ED1F8FF" }}>Login di sini</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
