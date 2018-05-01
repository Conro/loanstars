import * as mongoose from 'mongoose';

const navSchema = new mongoose.Schema({
  userId: String,
  location: String,
  app: {type: String, required: false},
  data: String
});


const AlexaNav = mongoose.model('AlexaNav', navSchema);

export default AlexaNav;