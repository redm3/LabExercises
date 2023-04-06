'use strict'
const User = require('./user') //require the model
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')

async function init() {
    await User.sync(); //sync the model
    await Post.sync();
    await Comment.sync();
    await Like.sync();

};

init();

module.exports = {
    User, //export the model
    Post,
    Comment,
    Like
};