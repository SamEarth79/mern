const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all details");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = User.create({ name, email, password: hashedPassword });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Enter email and password");
    }

    const foundUser = await User.findOne({ email });

    if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
        res.status(200).json({
            _id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            token: generateToken(foundUser.id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid Credentials");
    }
});
const getMyShows = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.json({ _id, name, email });
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

module.exports = { register, login, getMyShows };
