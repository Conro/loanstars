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
    
}