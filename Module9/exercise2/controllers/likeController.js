"use strict";
let Models = require("../models"); //matches index.js

const getLikes = (req, res) => {
    //finds all Likes
    Models.Like.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createLikes = (req, res) => {
    //creates a new Like using JSON data Likeed in request body
    console.log(req.body)
    new Models.Like(req.body).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getLikes, createLikes
}
