const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    // {
    //     "name": "Naacho Naacho",
    //     "image": "https://i0.wp.com/www.djsbuzz.in/wp-content/uploads/2022/02/nacho-nacho-rrr-remix-dj-purvish.jpg?w=1000&ssl=1",
    //     "release_data": "10 November 2021",
    //     "rating": "10",
    //     "artists":"Vishal Mishra",     
    // },
    name: { type: String, required: true },
    release_data: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    artist: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

const Song = mongoose.model("song", songSchema)
module.exports = Song