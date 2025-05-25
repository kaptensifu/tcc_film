import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, loginHandler, logout } from '../controllers/UserController.js';
import { getFilms, getFilmById, createFilm, updateFilm, deleteFilm } from '../controllers/FilmController.js';
import { getRatings, getRatingById, createRating, updateRating, deleteRating } from '../controllers/RatingController.js';
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";



const router = express.Router();

//endpoint akses token
router.get('/token', refreshToken);
//endpoin auth
router.post('/login', loginHandler);
router.delete('/logout', logout);

//endpoint user
router.post("/register", createUser); 
router.get("/users",verifyToken, getUsers);
router.get("/users/:id",verifyToken, getUserById);  
router.put("/edit-user/:id",verifyToken, updateUser);
router.delete("/delete-user/:id",verifyToken, deleteUser);

//endpoint film
router.get('/films',verifyToken, getFilms);
router.get('/films/:id',verifyToken, getFilmById);
router.post('/add-film',verifyToken, createFilm);
router.patch('/edit-film/:id',verifyToken, updateFilm);
router.delete('/delete-film/:id',verifyToken, deleteFilm);

//endpoint rating
router.get('/ratings',verifyToken, getRatings);
router.get('/ratings/:id',verifyToken, getRatingById);
router.post('/add-rating',verifyToken, createRating);
router.patch('/edit-rating/:id',verifyToken, updateRating);
router.delete('/delete-rating/:id',verifyToken, deleteRating);

router.all('*', (req, res) => {
  res.status(404).json({
    status: "Failed",
    message: "Endpoint not found"
  });
});

export default router;
