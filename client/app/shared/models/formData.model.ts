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
        annualincome: '',
        totalassets: ''
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
        this.finances.annualincome = '';
        this.finances.totalassets = '';
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

export class Step1 {
    firstName: string = '';
    middleName: string = '';
    lastName : string = '';
    email: string = '';
    dob: string = '';
    currentAddress1: string = '';
    currentAddress2: string = '';
    city: string = '';
    state: string = '';
    zipCode: string = '';
    primaryPhone: string = '';
    primaryPhoneType: string = '';
    alternatePhone: string = '';
    alternatePhoneType: string = '';
    residencyStatus: string = '';
}

export class Step2 {
    propertyType: string = '';
    propertyAttached: string = '';
    useOfProperty: string = '';
    purchasePrice: string = '';
    downPayment: string = '';
    annualTaxes: string = '';
    annualHazard: string = '';
    annualFlood: string = '';
    agent: string = '';
    homePlan: string = '';
    purchaseAgreement: string = '';
    equity: string = '';
}

export class Step3{
    annualincome: string = '';
    totalassets: string = '';
}