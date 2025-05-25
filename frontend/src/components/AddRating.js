import React, { useState } from 'react';
import AxiosInstance from '../utils/AxiosInstance.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../auth/AuthProvider.js";
import 'bulma/css/bulma.min.css';

const AddRating = () => {
  const [komentar, setKomentar] = useState('');
  const [rating, setRating] = useState('');
  const { user } = useAuth();
  const { id: filmId } = useParams();
  const navigate = useNavigate();

  const saveRating = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/add-rating", { // Hapus BASE_URL dan gunakan AxiosInstance
        komentar,
        rating,
        userId: user.id, // Menggunakan ID pengguna dari konteks Auth
        filmId
        
      });
      navigate(`/films/${filmId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section has-background-dark" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="box" style={{
          backgroundColor: "#6a0dad",
          border: "1px solid #1a1a1a",
          color: "#fff",
          borderRadius: "8px",
          padding: "2rem",
        }}>
          <h1 className="Komentar has-text-white has-text-centered">🎬 Tambah Ulasan Baru</h1>
          <form onSubmit={saveRating} >
            <div className="field">
              <label className="label has-text-white">Komentar</label>
              <input className="input" value={komentar} onChange={(e) => setKomentar(e.target.value)} required />
            </div>
            <div className="field">
              <label className="label has-text-white">Rating</label>
              <input className="input" type='number' value={rating} onChange={(e) => setRating(e.target.value)} required />
            </div>
            
            
            <div className="has-text-centered mt-4">
              <button className="button" type="submit"
                style={{
                  backgroundColor: "#b19cd9",
                  color: "#1a1a1a",
                  fontWeight: "bold"
                }}
              >
                ✅ Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRating;
