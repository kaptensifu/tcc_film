import React, { useEffect, useState } from 'react';
import AxiosInstance from '../utils/AxiosInstance';

const UserList = () => {
  const [userRatingsMap, setUserRatingsMap] = useState({});

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await AxiosInstance.get('/ratings'); // pastikan ini mengembalikan user & film di dalamnya
      const ratings = response.data;

      // Buat map userId -> data user dan daftar komentarnya
      const grouped = {};
      ratings.forEach((rating) => {
        const userId = rating.user.id;
        if (!grouped[userId]) {
          grouped[userId] = {
            user: rating.user,
            ratings: []
          };
        }
        grouped[userId].ratings.push({
          id: rating.id,
          komentar: rating.komentar,
          rating: rating.rating,
          film: rating.film
        });
      });

      setUserRatingsMap(grouped);
    } catch (error) {
      console.error('Gagal mengambil data rating:', error);
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
          padding: "2rem"
        }}>
          <h1 className="title has-text-white has-text-centered">👤 Daftar Pengguna & Ulasan</h1>
          <ul>
            {Object.values(userRatingsMap).map(({ user, ratings }) => (
              <li key={user.id} className="mb-5" style={{
                backgroundColor: "#4b0082",
                color: "#fff",
                padding: "1rem",
                borderRadius: "5px"
              }}>
                <strong style={{ color: "#E8B8F7FF", fontSize: "1.2rem" }}>{user.name}</strong>
                <ul className="mt-3">
                  {ratings.map((r) => (
                    <li key={r.id} style={{
                      backgroundColor: "#3a0066",
                      padding: "0.75rem",
                      borderRadius: "5px",
                      marginBottom: "0.5rem"
                    }}>
                      <p style={{ margin: 0 }}><strong style={{color: "#48DBF8FF"}}>🎬 {r.film.judul}</strong></p>
                      <p style={{ margin: 0 }}>{r.komentar}</p>
                      <p style={{ margin: 0 }}><strong>⭐</strong> {r.rating}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserList;
