module.exports = (app) => {
    var router = require("express").Router();
    const movie = require("../controllers/movie.controller");
    var bodyParser = require('body-parser');
    const checkValidation = require("../validation/checker.validation")
    const { check } = require("express-validator")

    var jsonParser = bodyParser.json(); 

    router.post(
        "/movies", 
        jsonParser, 
        [
            check('id','Id harus diisi').notEmpty(),
            check('id','Id harus angka').isNumeric(),
            check('title', 'Title harus diisi').notEmpty(),
            check('title', 'Title harus string').isString(),
            check('description', 'Description harus string').isString(),
            check('rating', 'Rating harus diisi').notEmpty(),
            check('rating', 'Rating harus angka').isNumeric(),
        ], 
        checkValidation.check_validation,
        movie.addMovies
    )
    
    router.get("/movies", movie.listMovies)
    router.get("/movies/:id", movie.detailMovies)
    router.patch("/movies/:id", jsonParser, movie.updateMovies)
    router.delete("/movies/:id", movie.deleteMovies)
    app.use("/", router)

}

