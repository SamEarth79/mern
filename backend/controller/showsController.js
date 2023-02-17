const expressAsyncHandler = require("express-async-handler");
const Show = require("../model/showsModel");
const User = require("../model/userModel");

const getShows = expressAsyncHandler(async (req, res) => {
    const shows = await Show.find({ user: req.user.id });
    res.json(shows);
});

const postShows = expressAsyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error("Please add all details");
    }
    const userShow = await Show.create({
        user: req.user.id,
        name: req.body.name,
        fav: req.body.fav ? req.body.fav : null,
        rating: req.body.rating ? req.body.rating : null,
    });
    res.json(userShow);
});

const putShows = expressAsyncHandler(async (req, res) => {
    try {
        const show = await Show.findById(req.query.id);
        if (!show) {
            res.status(400).json({ message: "Please give an id" });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        if (show.user.toString() !== user.id) {
            res.status(401);
            throw new Error("User not authorised");
        }

        const updatedShow = await Show.findByIdAndUpdate(
            req.query.id,
            {
                name: req.body.name ? req.body.name : show.name,
                fav: req.body.fav ? req.body.fav : show.fav,
                rating: req.body.rating ? req.body.rating : show.rating,
            },
            { new: true }
        );
        res.json(updatedShow);
    } catch (error) {
        console.error(error.message);
    }
});

const deleteShows = expressAsyncHandler(async (req, res) => {
    try {
        const show = await Show.findById(req.query.id);

        if (!show) {
            res.status(400).json({ message: "Please give an id" });
        }
        const user = await User.findById(req.user.id);
        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        if (show.user.toString() !== user.id) {
            res.status(401);
            throw new Error("User not authorised");
        }

        const deletedShow = await Show.findByIdAndDelete(req.query.id);
        res.json({ message: "Deleted" });
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = { getShows, postShows, putShows, deleteShows };
