const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    fav: String,
    rating: Number,
});

module.exports = mongoose.model("Show", showSchema);
