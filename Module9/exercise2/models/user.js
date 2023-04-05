const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId()
  },
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary']
  },
  biography: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);





//The "user" mentioned in the above line should be in lowercase
//singular form ..whereas the actual collection name in
//mongodb will be in the plural form.
//Refer to mongoose documentation for more: https://www.npmjs.com/package/mongoose
//The first argument is the singular name of your collection.
//Mongoose automatically looks for the lowercase plural version. For example, if you use
//const MyModel = mongoose.model('Ticket', mySchema);
//Then MyModel will use the tickets collection, not the Ticketcollection.