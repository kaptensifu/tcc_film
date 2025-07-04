import React, { useState } from 'react';
import AxiosInstance from '../utils/AxiosInstance.js';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const AddFilm = () => {
  const [judul, setJudul] = useState('');
  const [genre, setGenre] = useState('');
  const [tahun, setTahun] = useState('');
  const navigate = useNavigate();

  const saveFilm = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/add-film", { // Hapus BASE_URL dan gunakan AxiosInstance
        judul,
        genre,
        tahun,
      });
      navigate("/films");
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
          <h1 className="judul has-text-white has-text-centered">🎬 Tambah Film Baru</h1>
          <form onSubmit={saveFilm} >
            <div className="field">
              <label className="label has-text-white">Judul</label>
              <input className="input" value={judul} onChange={(e) => setJudul(e.target.value)} required />
            </div>
            <div className="field">
              <label className="label has-text-white">Genre</label>
              <input className="input" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            </div>
            <div className="field">
              <label className="label has-text-white">Tahun</label>
              <input className="input" type="number" value={tahun} onChange={(e) => setTahun(e.target.value)} required />
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

export default AddFilm;
