import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const AddFilm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${BASE_URL}/films`, { title, genre, year, description });
  //     navigate('/films');
  //   } catch (err) {
  //     alert('Gagal menambahkan film');
  //   }
  // };

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
          <h1 className="title has-text-white has-text-centered">🎬 Tambah Film Baru</h1>
          <form /* onSubmit={handleSubmit} */>
            <div className="field">
              <label className="label has-text-white">Judul</label>
              <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="field">
              <label className="label has-text-white">Genre</label>
              <input className="input" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
              <label className="label has-text-white">Tahun</label>
              <input className="input" type="number" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="field">
              <label className="label has-text-white">Deskripsi</label>
              <textarea className="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
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
