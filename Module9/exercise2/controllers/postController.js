"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (req, res) => {
    //finds all posts
    Models.Post.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (req, res) => {
    //creates a new post using JSON data POSTed in request body
    console.log(req.body)
    new Models.Post(req.body).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getPosts, createPost
}
