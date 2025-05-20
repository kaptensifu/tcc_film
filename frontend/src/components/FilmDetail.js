import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils';
import { useParams, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const FilmDetail = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        // async function fetchFilm() {
        //   const res = await axios.get(`${BASE_URL}/films/${id}`);
        //   setFilm(res.data);
        // }
        // fetchFilm();

        // Dummy data untuk sementara
        setFilm({
            id,
            title: "Inception",
            genre: "Sci-Fi",
            year: 2010,
            description: "Seorang pencuri yang memiliki kemampuan untuk masuk ke mimpi orang lain diberikan tugas membalikkan pikiran seseorang.",
            reviews: [
                { id: 1, user: "Alice", content: "Film ini sangat keren dan penuh teka-teki!" },
                { id: 2, user: "Bob", content: "Christopher Nolan adalah jenius." }
            ]
        });
    }, [id]);

    if (!film) return <p className="has-text-white has-text-centered mt-6">Loading...</p>;

    return (
        <section className="section has-background-dark" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div
                    className="box"
                    style={{
                        backgroundColor: "#6a0dad",
                        border: "1px solid #1a1a1a",
                        color: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        padding: "2rem"
                    }}
                >
                    <h1 className="title has-text-white has-text-centered mb-4">
                        🎥 {film.title}
                    </h1>
                    <p><strong>Genre:</strong> {film.genre}</p>
                    <p><strong>Tahun:</strong> {film.year}</p>
                    <p className="mt-3"><strong>Deskripsi:</strong> {film.description}</p>

                    <hr style={{ backgroundColor: "#fff", opacity: 0.2 }} />

                    <h2 className="subtitle has-text-white mt-4">📝 Ulasan</h2>
                    <ul>
                        {film.reviews.map((review) => (
                            <li key={review.id} style={{
                                backgroundColor: "#4b0082",
                                padding: "1rem",
                                borderRadius: "5px",
                                marginBottom: "1rem",
                            }}>
                                <p><strong style={{ color: "#E8B8F7FF" }}>{review.user}</strong>:</p>
                                <p>{review.content}</p>
                                <div className="buttons is-right mt-2">
                                    <button className="button is-small"
                                        style={{ backgroundColor: "#ffd700", color: "#000" }}
                                        onClick={() => {/* handleEditReview(review.id) */ }}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button className="button is-small"
                                        style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
                                        onClick={() => {/* handleDeleteReview(review.id) */ }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Link to="/films" className="button mt-4"
                        style={{
                            backgroundColor: "#b19cd9",
                            color: "#1a1a1a",
                            fontWeight: "bold",
                            border: "none"
                        }}
                    >
                        ⬅ Kembali ke Daftar Film
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FilmDetail;
