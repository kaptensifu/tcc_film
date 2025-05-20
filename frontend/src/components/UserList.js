import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // async function fetchUsers() {
        //   const res = await axios.get(`${BASE_URL}/users`);
        //   setUsers(res.data);
        // }
        // fetchUsers();

        // Dummy data
        setUsers([
            { id: 1, username: "admin" },
            { id: 2, username: "filmlover" },
        ]);
    }, []);

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
                    <h1 className="title has-text-white has-text-centered">👤 Daftar Pengguna</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id} className="mb-3" style={{
                                backgroundColor: "#4b0082",
                                color: "#fff",
                                padding: "1rem",
                                borderRadius: "5px"
                            }}>
                                <strong style={{ color: "#E8B8F7FF" }}>{user.username}</strong>
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
                </div>
            </div>
        </section>
    );
};

export default UserList;
