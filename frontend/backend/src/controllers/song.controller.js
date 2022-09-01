const express = require("express");
const Song = require("../models/song.model")
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const song = await Song.find().lean().exec();
        return res.status(200).send(song)
    }
    catch (err) {
        return res.status(500).send(err)
    }
})

router.post("", async (req, res) => {
    try {
        const song = await Song.create(req.body)
        return res.status(200).send(song)
    }
    catch (err) {
        console.log(err)
        return res.status(500).send(err, "err in user post")
    }
})

module.exports = router;