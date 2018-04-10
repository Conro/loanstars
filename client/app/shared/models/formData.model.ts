import { Step1, Step2, Step3 } from '../../shared/models/appplication-models/steps.model'
import { Status } from '../../shared/models/appplication-models/status.model'

export class FormData {
    personal: Step1 = {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        dob: '',
        currentAddress1: '',
        currentAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        primaryPhone: '',
        primaryPhoneType: '',
        alternatePhone: '',
        alternatePhoneType: '',
        residencyStatus: ''
    };
    property: Step2 = {
        propertyType: '',
        propertyAttached: '',
        useOfProperty: '',
        purchasePrice: '',
        downPayment: '',
        annualTaxes: '',
        annualHazard: '',
        annualFlood: '',
        agent: '',
        homePlan: '',
        purchaseAgreement: '',
        equity: ''
    };

    finances: Step3 = {
        annualIncome: '',
        totalAssets: ''
    };

    status: Status = {
        currentStatus:  '',
        isCompleted: false,
        lastCompletedStep: '',
        updatedDate: new Date(),
        createdDate: new Date()
    };

    clear() {
        this.personal.firstName = '';
        this.personal.middleName = '';
        this.personal.lastName = '';
        this.personal.email = '';
        this.personal.dob = '';
        this.personal.currentAddress1 = '';
        this.personal.currentAddress2 = '';
        this.personal.city = '';
        this.personal.state = '';
        this.personal.zipCode = '';
        this.personal.primaryPhone = '';
        this.personal.primaryPhoneType = '';
        this.personal.alternatePhone = '';
        this.personal.alternatePhoneType = '';
        this.personal.residencyStatus = '';
        this.finances.annualIncome = '';
        this.finances.totalAssets = '';
        this.property.propertyType = '';
        this.property.propertyAttached = '';
        this.property.useOfProperty = '';
        this.property.purchasePrice = '';
        this.property.downPayment = '';
        this.property.annualTaxes = '';
        this.property.annualHazard = '';
        this.property.annualFlood = '';
        this.property.agent = '';
        this.property.homePlan = '';
        this.property.purchaseAgreement = '';
        this.property.equity = '';
    }
}