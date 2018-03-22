import { Injectable }                        from '@angular/core';

import { FormData, Step1, Step2 }       from '../shared/models/formData.model';
import { FormFlowService }                   from './form-flow.service/form-flow.service';
import { STEPS }                             from './form-flow.service/form-steps.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isStep1FormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isStep2FormValid: boolean = false;

    constructor(private formflowService: FormFlowService) { 
    }

    getStep1(): Step1 {
        // Return the Personal data
        var personal: Step1 = {
            firstName: this.formData.personal.firstName,
            middleName: this.formData.personal.middleName,
            lastName: this.formData.personal.lastName,
            email: this.formData.personal.email,
            dob: this.formData.personal.dob,
            currentAddress1: this.formData.personal.currentAddress1,
            currentAddress2: this.formData.personal.currentAddress2,
            city: this.formData.personal.city,
            state: this.formData.personal.state,
            zipCode: this.formData.personal.zipCode,
            primaryPhone: this.formData.personal.primaryPhone,
            primaryPhoneType: this.formData.personal.primaryPhoneType,
            alternatePhone: this.formData.personal.alternatePhone,
            alternatePhoneType: this.formData.personal.alternatePhoneType,
            residencyStatus: this.formData.personal.residencyStatus

        };
        return personal;
    }

    setStep1(data: Step1) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isStep1FormValid = true;
            this.formData.personal.firstName = data.firstName,
            this.formData.personal.middleName = data.middleName,
            this.formData.personal.lastName = data.lastName,
            this.formData.personal.email = data.email,
            this.formData.personal.dob = data.dob,
            this.formData.personal.currentAddress1 = data.currentAddress1,
            this.formData.personal.currentAddress2 = data.currentAddress2,
            this.formData.personal.city = data.city,
            this.formData.personal.state = data.state,
            this.formData.personal.zipCode = data.zipCode,
            this.formData.personal.primaryPhone = data.primaryPhone,
            this.formData.personal.primaryPhoneType = data.primaryPhoneType,
            this.formData.personal.alternatePhone = data.alternatePhone,
            this.formData.personal.alternatePhoneType = data.alternatePhoneType,
            this.formData.personal.residencyStatus = data.residencyStatus
        // Validate Personal Step in Workflow
        //this.formflowService.validateStep(STEPS.personal);
    }


    getStep2() : Step2 {
        // Return the Address data
        var address: Step2 = {

        };
        return address;
    }

    setStep2(data: Step2) {
        // Update the Address data only when the Address Form had been validated successfully
        
        // Validate Address Step in Workflow
        //this.formflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        //this.formflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isStep1FormValid = this.isStep2FormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isStep1FormValid &&
                this.isStep2FormValid;
    }
}