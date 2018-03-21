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
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    }

    setStep1(data: Step1) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isStep1FormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        //this.formflowService.validateStep(STEPS.personal);
    }

    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        //this.formflowService.validateStep(STEPS.work);
    }

    getStep2() : Step2 {
        // Return the Address data
        var address: Step2 = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setStep2(data: Step2) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isStep2FormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
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