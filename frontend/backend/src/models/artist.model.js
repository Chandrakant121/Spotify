const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true },
    rating: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

const Artist = mongoose.model("artist", artistSchema)
module.exports = Artist