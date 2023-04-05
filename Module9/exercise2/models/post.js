const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String,required: true},
  image: {type: String,},
  created_at: {type: Date,default: Date.now,required: true},
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true}
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
