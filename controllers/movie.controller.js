const db = require("../models")
const Movies = db.movies


exports.listMovies = (req, res) => {
    Movies.findAll()
        .then(data => {
            return res.status(200).send({ "status": "success", "pesan": data })
        })
        .catch(err => {
            return res.status(400).send({ "status": "gagal", "pesan": "error :" + err })
        })
}

exports.detailMovies = (req, res) => {
    Movies.findOne({
        where: {
            id : req.params.id
        }
    })
        .then(data => {
            if (!data) {
                return res.status(200).send({ "status": "success", "pesan": "data yang dicari tidak tersedia" })    
            }
            return res.status(200).send({ "status": "success", "pesan": data })
        })
        .catch(err => {
            return res.status(400).send({ "status": "gagal", "pesan": "error :" + err })
        })
}


exports.addMovies = (req, res, next) => {
    // let id = req.body.id ? id :  res.status(200).send({ "status": "gagal", "pesan": "isi id" })

    Movies.create({
        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        rating : req.body.rating,
        image : req.body.image
    })
    .then(() => {
        return res.status(200).send({ "status": "success", "pesan": "data berhasil ditambahkan" })
    })
    .catch(err => {
        return res.status(400).send({ "status": "gagal", "pesan": "data gagal ditambahkan" + err })
    })
}

exports.updateMovies = (req,res) => {
    Movies.update({
        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        rating : req.body.rating,
        image : req.body.image
    },{
        where: {
            id : req.params.id
        }
    })
    .then(() => {
        return res.status(200).send({ "status": "success", "pesan": "data berhasil diedit" })
    })
    .catch(err => {
        return res.status(400).send({ "status": "gagal", "pesan": "data gagal diedit" + err })
    })
}

exports.deleteMovies = (req, res) => {
    Movies.destroy({
        where: {
            id : req.params.id
        }
    })
    .then(() => {
        return res.status(200).send({ "status": "success", "pesan": "data berhasil dihapus" })
    })
    .catch(err => {
        return res.status(400).send({ "status": "gagal", "pesan": "data gagal dihapus" + err })
    })
}