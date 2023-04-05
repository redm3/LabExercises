const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  post_id: {type: mongoose.Schema.Types.ObjectId,ref: 'Post',required: true},
  user_id: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
  comment: {type: String,required: true},
  created_at: {type: Date,default: Date.now,required: true}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
