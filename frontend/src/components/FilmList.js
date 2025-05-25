import React, { useEffect, useState } from 'react';
import AxiosInstance from "../utils/AxiosInstance.js";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../auth/AuthProvider.js";
import 'bulma/css/bulma.min.css';

const FilmList = () => {
    const [films, setFilm] = useState([]);
    const [editingFilmId, setEditingFilmId] = useState(null);
    const [editData, setEditData] = useState({ judul: "", genre: "", tahun: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = async () => {
        try {
            setLoading(true);
            const response = await AxiosInstance.get("/films"); // Use AxiosInstance
            setFilm(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching films:", error);
            setError("Gagal mengambil data FILM");
        } finally {
            setLoading(false);
        }
    };

    const deleteFilm = async (id) => {
        try {
            await AxiosInstance.delete(`/delete-film/${id}`); // Use AxiosInstance
            getFilms();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.log("Logout gagal:", error);
        }
    };

    if (loading) {
        return (
            <div className="hero is-fullheight" style={{ backgroundColor: '#B1AEAEFF' }}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Memuat Data...</h1>
                        <progress className="progress is-primary" max="100"></progress>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="hero is-fullheight" style={{ backgroundColor: '#B1AEAEFF' }}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="notification is-danger">
                            <p>{error}</p>
                            <button className="button is-info mt-4" onClick={getFilms}>Coba Lagi</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="section has-background-dark" style={{ minHeight: '100vh' }}>
            
            <div className="level-left">
                <img src="https://storage.googleapis.com/film-app-assets/Screenshot%202025-05-25%20103739.png" alt="Logo film" style={{ width: '100px' }} />

                </div>
            <div className="level-right">
                <Link to="/users" className="button is-info is-light is-rounded">
      👤 Lihat Pengguna
    </Link>
                <button
                    onClick={handleLogout}
                    className="button is-danger is-light is-rounded"
                >
                    Logout
                </button>
            </div>
            <div className="container">
                <h1 className="title has-text-white has-text-centered mb-6">🎬 Daftar Film</h1>

                <div className="columns is-multiline">
                    {films.map((film) => (
                        <div key={film.id} className="column is-4">
                            <div
                                className="box"
                                style={{
                                    backgroundColor: "#6a0dad",
                                    border: "1px solid #1a1a1a",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {editingFilmId === film.id ? (
                                    <div>
                                        <input
                                            className="input is-small mb-2"
                                            type="text"
                                            placeholder="Judul"
                                            value={editData.judul}
                                            onChange={(e) => setEditData({ ...editData, judul: e.target.value })}
                                            required
                                        />
                                        <input
                                            className="input is-small mb-2"
                                            type="text"
                                            placeholder="Genre"
                                            value={editData.genre}
                                            onChange={(e) => setEditData({ ...editData, genre: e.target.value })}
                                            required
                                        />
                                        <input
                                            className="input is-small mb-2"
                                            type="number"
                                            placeholder="Tahun"
                                            value={editData.tahun}
                                            onChange={(e) => setEditData({ ...editData, tahun: e.target.value })}
                                            required
                                        />
                                        <div className="buttons">
                                            <button
                                                className="button is-success is-small"
                                                onClick={async () => {
                                                    try {
                                                        await AxiosInstance.patch(`/edit-film/${film.id}`, editData);
                                                        setEditingFilmId(null);
                                                        getFilms(); // refresh list
                                                    } catch (err) {
                                                        console.error("Gagal update film:", err);
                                                    }
                                                }}
                                            >
                                                💾 Simpan
                                            </button>
                                            <button
                                                className="button is-light is-small"
                                                onClick={() => setEditingFilmId(null)}
                                            >
                                                ❌ Batal
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div>
                                            <h2 className="title is-4 has-text-white">{film.judul}</h2>
                                            <p><strong>Genre:</strong> {film.genre}</p>
                                            <p><strong>Tahun:</strong> {film.tahun}</p>
                                        </div>
                                        <div className="mt-4">
                                            <Link
                                                to={`/films/${film.id}`}
                                                className="button is-small is-fullwidth"
                                                style={{
                                                    backgroundColor: "#b19cd9",
                                                    color: "#1a1a1a",
                                                    fontWeight: "bold",
                                                    border: "none",
                                                }}
                                            >
                                                Detail
                                            </Link>
                                        </div>
                                        <div className="buttons mt-3">
                                            <button
                                                className="button is-small"
                                                style={{ backgroundColor: "#ffd700", color: "#000" }}
                                                onClick={() => {
                                                    setEditingFilmId(film.id);
                                                    setEditData({ judul: film.judul, genre: film.genre, tahun: film.tahun });
                                                }}
                                            >
                                                ✏️ Edit
                                            </button>
                                            <button
                                                className="button is-small"
                                                style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
                                                onClick={() => deleteFilm(film.id)}
                                            >
                                                🗑️ Delete
                                            </button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
                <div className="has-text-centered mt-6">
                    <Link to="/add-film" className="button"
                        style={{
                            backgroundColor: "#b19cd9",
                            color: "#1a1a1a",
                            fontWeight: "bold",
                            border: "none"
                        }}
                    >
                        ➕ Tambah Film
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FilmList;
