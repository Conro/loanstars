import * as mongoose from 'mongoose';

const jwtSchema = new mongoose.Schema({
  token: String,
  user: String
});


const JwtSchema = mongoose.model('JwtToken', jwtSchema);

export default JwtSchema;