import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const FilmList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        // async function fetchFilms() {
        //   const res = await axios.get(`${BASE_URL}/films`);
        //   setFilms(res.data);
        // }
        // fetchFilms();

        // Dummy data sementara
        setFilms([
            { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
            { id: 2, title: "The Dark Knight", genre: "Action", year: 2008 },
            { id: 3, title: "Interstellar", genre: "Adventure", year: 2014 },
        ]);
    }, []);

    return (
        <section className="section has-background-dark" style={{ minHeight: '100vh' }}>
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
                                <div>
                                    <h2 className="title is-4 has-text-white">{film.title}</h2>
                                    <p><strong>Genre:</strong> {film.genre}</p>
                                    <p><strong>Tahun:</strong> {film.year}</p>
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
                                    <button className="button is-small"
                                        style={{ backgroundColor: "#ffd700", color: "#000" }}
                                        onClick={() => {/* navigasi atau handleEdit(film.id) */ }}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button className="button is-small"
                                        style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
                                        onClick={() => {/* handleDelete(film.id) */ }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
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
