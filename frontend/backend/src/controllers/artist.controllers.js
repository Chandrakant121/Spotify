const express = require("express");
const Artist = require("../models/artist.model")
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const artist = await Artist.find().lean().exec();
        return res.status(200).send(artist)
    }
    catch (err) {
        return res.status(500).send(err)
    }
})


router.post("", async (req, res) => {
    try {
        const artist = await Artist.findOne({ name: req.body.name })
        const dob = await Artist.findOne({ dob: req.body.dob })

        if (artist) {
            return res.status(400).send({ message: "already present", status: false });
        }
        if (dob) {
            return res.status(400).send({ message: "already present", status: false });
        }
        else {
            artist = await Artist.create(req.body)
            return res.status(200).send({ artist: artist, status: true })
        }
    }
    catch (err) {
        // console.log(err)
        return res.status(500).send(err, "err in user post")
    }
})





module.exports = router;