import Film from "../models/FilmModel.js";
import Rating from "../models/RatingModel.js";
import User from "../models/UserModel.js";

export const getFilms = async(req, res) =>{
    try {
        const response = await Film.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFilmById = async(req, res) =>{
    try {
        const response = await Film.findOne({
            where: { id: req.params.id },
            include: [{
                model: Rating,
                include: [User] // untuk menampilkan siapa yang kasih rating
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createFilm = async(req, res) =>{
    try {
        await Film.create(req.body);
        res.status(201).json({msg: "Film Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFilm = async(req, res) =>{
    try {
        await Film.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Film Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFilm = async(req, res) =>{
    try {
        await Film.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Film Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}