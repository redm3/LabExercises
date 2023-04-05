const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
  user_id: {type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true}
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;

