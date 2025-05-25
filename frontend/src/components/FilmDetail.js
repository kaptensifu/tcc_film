import React, { useEffect, useState } from 'react';
import AxiosInstance from '../utils/AxiosInstance.js';
import { useParams, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editRatingId, setEditRatingId] = useState(null);
  const [editedComment, setEditedComment] = useState('');
  const [editedScore, setEditedScore] = useState(1);

  useEffect(() => {
    fetchFilmDetail();
    fetchRatings();
  }, [id]);

  const fetchFilmDetail = async () => {
    try {
      const response = await AxiosInstance.get(`/films/${id}`);
      setFilm(response.data);
    } catch (err) {
      console.error("Error fetching film:", err);
      setError("Gagal mengambil data film.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRatings = async () => {
    try {
      const response = await AxiosInstance.get(`/ratings?filmId=${id}`);
      setRatings(response.data);
    } catch (err) {
      console.error("Error fetching ratings:", err);
    }
  };

  const handleDeleteRating = async (ratingId) => {
    try {
      await AxiosInstance.delete(`/delete-rating/${ratingId}`);
      fetchRatings();
    } catch (err) {
      console.error("Gagal menghapus ulasan:", err);
    }
  };

  const handleEditRating = (rating) => {
    setEditRatingId(rating.id);
    setEditedComment(rating.komentar);
    setEditedScore(rating.rating);
  };

  const handleSaveRating = async () => {
    try {
      await AxiosInstance.patch(`/edit-rating/${editRatingId}`, {
        komentar: editedComment,
        rating: editedScore
      });
      setEditRatingId(null);
      fetchRatings();
    } catch (err) {
      console.error("Gagal menyimpan edit ulasan:", err);
    }
  };

  if (loading) return <p className="has-text-white has-text-centered mt-6">Loading...</p>;
  if (error) return <p className="has-text-danger has-text-centered mt-6">{error}</p>;
  if (!film) return <p className="has-text-white has-text-centered mt-6">Film tidak ditemukan.</p>;

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
            🎥 {film.judul}
          </h1>
          <p><strong style={{ color: "#0ED1F8FF" }}>Genre:</strong> {film.genre}</p>
          <p><strong style={{ color: "#0ED1F8FF" }}>Tahun:</strong> {film.tahun}</p>

          <hr style={{ backgroundColor: "#fff", opacity: 0.2 }} />

          <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
            <h2 className="subtitle has-text-white mt-4 mb-0">📝 Ulasan</h2>
            <Link to={`/add-rating/${film.id}`} className="button is-link is-light is-small mt-4">
              ➕ Tambah Ulasan
            </Link>
          </div>

          <ul>
            {ratings.map((rating) => (
              <li key={rating.id} style={{
                backgroundColor: "#4b0082",
                padding: "1rem",
                borderRadius: "5px",
                marginBottom: "1rem",
              }}>
                <p><strong style={{ color: "#E8B8F7FF" }}>{rating.user?.name || 'Anonim'}</strong> :</p>

                {editRatingId === rating.id ? (
                  <>
                    <textarea
                      className="textarea is-small mb-2"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                    />
                    <input
                      className="input is-small mb-2"
                      type="number"
                      
                      value={editedScore}
                      onChange={(e) => setEditedScore(Number(e.target.value))}
                    />
                    <button className="button is-success is-small mr-2" onClick={handleSaveRating}>
                      💾 Simpan
                    </button>
                    <button className="button is-light is-small" onClick={() => setEditRatingId(null)}>
                      ❌ Batal
                    </button>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ margin: 0 }}>{rating.komentar}</p>
                      <p style={{ margin: 0 }}><strong>⭐</strong> {rating.rating}</p>
                    </div>
                    <div className="buttons is-centered mt-2">
                      <button className="button is-small"
                        style={{ backgroundColor: "#ffd700", color: "#000" }}
                        onClick={() => handleEditRating(rating)}
                      >
                        ✏️ Edit
                      </button>
                      <button className="button is-small"
                        style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
                        onClick={() => handleDeleteRating(rating.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
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
