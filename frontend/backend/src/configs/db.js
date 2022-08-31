const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect(
        "mongodb+srv://abc:abc@cluster0.cybyn6f.mongodb.net/spotify?retryWrites=true&w=majority"
    );
};
module.exports = connect;