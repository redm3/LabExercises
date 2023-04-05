"use strict";
let Models = require("../models"); //matches index.js

const getComments = (res) => {
    //finds all Comments
    Models.Comment.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const createComments = (data, res) => {
    //creates a new Comment using JSON data POSTed in request body
    console.log(data)
    new Models.Comment(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
module.exports = {
    getComments, createComments
}