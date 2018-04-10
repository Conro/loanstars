import { Step1, Step2, Step3 } from './steps.model'
import { Status } from './status.model'

export class Application {
  _id?: string;
  type?: string;
  status?: Status;
  step1?: Step1;
  step2?: Step2;
  step3?: Step3;

  constructor(){
    this._id = undefined;
    this.type = '';
    this.status = new Status();
    this.step1 = new Step1();
    this.step2 = new Step2();
    this.step3 = new Step3();

  }

  clear() {
    this._id = undefined;
    this.type = '';
    this.status.currentStatus = '';
    this.status.isCompleted = false;
    this.status.lastCompletedStep = '';
    this.status.updatedDate = new Date();
    this.status.createdDate = new Date();
    this.step1.firstName = '';
    this.step1.middleName = '';
    this.step1.lastName = '';
    this.step1.email = '';
    this.step1.dob = '';
    this.step1.currentAddress1 = '';
    this.step1.currentAddress2 = '';
    this.step1.city = '';
    this.step1.state = '';
    this.step1.zipCode = '';
    this.step1.primaryPhone = '';
    this.step1.primaryPhoneType = '';
    this.step1.alternatePhone = '';
    this.step1.alternatePhoneType = '';
    this.step1.residencyStatus = '';
    this.step2.agent = '';
    this.step2.annualFlood = '';
    this.step2.annualHazard = '';
    this.step2.annualTaxes = '';
    this.step2.downPayment = '';
    this.step2.equity = '';
    this.step2.homePlan = '';
    this.step2.propertyAttached = '';
    this.step2.propertyType = '';
    this.step2.purchaseAgreement = '';
    this.step2.purchasePrice = '';
    this.step2.useOfProperty = '';
    this.step3.annualIncome = '';
    this.step3.totalAssets = '';
  }
}
