import * as mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  userId: String,
  type: String,
  status: {
    currentStatus: String,
    isCompleted: Boolean,
    lastCompletedStep: String,
    updatedDate: Date,
    createdDate: Date
  },
  step1: {
    firstName: String,
    middleName: String,
    lastName : String,
    email: String,
    dob: String,
    currentAddress1: String,
    currentAddress2: String,
    city: String,
    state: String,
    zipCode: String,
    primaryPhone: String,
    primaryPhoneType: String,
    alternatePhone: String,
    alternatePhoneType: String,
    residencyStatus: String
  },
  step2: {
    propertyType: String,
    propertyAttached: String,
    useOfProperty: String,
    purchasePrice: String,
    downPayment: String,
    annualTaxes: String,
    annualHazard: String,
    annualFlood: String,
    agent: String,
    homePlan: String,
    purchaseAgreement: String,
    equity: String
  },
  step3: {
    annualIncome: String,
    totalAssets: String
  }
});

const App = mongoose.model('App', appSchema);

export default App;