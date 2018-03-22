import * as mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  userId: String,
  status: String,
  type: String,
  amount: Number
});

const App = mongoose.model('App', appSchema);

export default App;
