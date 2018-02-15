import * as mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  name: String
});

const App = mongoose.model('App', appSchema);

export default App;
