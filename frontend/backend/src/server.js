const app = require("./index");
const connect = require("./configs/db");
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
    try {
        await connect();
        console.log("listening port 5000");
    } catch (error) {
        console.log(error.message);
    }
});
