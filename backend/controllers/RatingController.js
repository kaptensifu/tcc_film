import Rating from "../models/RatingModel.js";
import User from "../models/UserModel.js";
import Film from "../models/FilmModel.js";


export const getRatings = async (req, res) => {
    try {
        const whereClause = {};

        if (req.query.filmId) {
            whereClause.filmId = req.query.filmId;
        }

        if (req.query.userId) {
            whereClause.userId = req.query.userId;
        }

        const response = await Rating.findAll({
            where: whereClause,
            include: [User, Film]
        });

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


export const getRatingById = async (req, res) => {
    try {
        const response = await Rating.findOne({
            where: {
                id: req.params.id
            },
            include: [User, Film]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createRating = async (req, res) => {
    try {
        await Rating.create(req.body);
        res.status(201).json({ msg: "Rating Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRating = async (req, res) => {
    try {
        await Rating.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Rating Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRating = async (req, res) => {
    try {
        await Rating.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Rating Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}