const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const db = require("./models/")
const port = process.env.PORT;

db.sequelize.sync()
    .then(async () => {
        await console.log("Database Sync");
    })
    .catch((err) => {
        console.log("Gagal Sync DB : " + err.message)
    })


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

require("./routes/movie.routes")(app)

module.exports = app;