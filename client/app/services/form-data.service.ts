import { Injectable }                        from '@angular/core';

import { FormData, Step1, Step2, Step3 }       from '../shared/models/formData.model';
import { FormFlowService }                   from './form-flow.service/form-flow.service';
import { STEPS }                             from './form-flow.service/form-steps.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isStep1FormValid: boolean = false;
    private isStep2FormValid: boolean = false;
    private isStep3FormValid: boolean = false;

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
        var property: Step2 = {
            propertyType: this.formData.property.propertyType,
            propertyAttached: this.formData.property.propertyAttached,
            useOfProperty: this.formData.property.useOfProperty,
            purchasePrice: this.formData.property.purchasePrice,
            downPayment: this.formData.property.downPayment,
            annualTaxes: this.formData.property.annualTaxes,
            annualHazard: this.formData.property.annualHazard,
            annualFlood: this.formData.property.annualFlood,
            agent: this.formData.property.agent,
            homePlan: this.formData.property.homePlan,
            purchaseAgreement: this.formData.property.purchaseAgreement,
            equity: this.formData.property.equity
        };
        return property;
    }

    setStep2(data: Step2) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isStep2FormValid = true;
        this.formData.property.propertyType = data.propertyType,
        this.formData.property.propertyAttached = data.propertyAttached,
        this.formData.property.useOfProperty = data.useOfProperty,
        this.formData.property.purchasePrice = data.purchasePrice,
        this.formData.property.downPayment = data.downPayment,
        this.formData.property.annualTaxes = data.annualTaxes,
        this.formData.property.annualHazard = data. annualHazard,
        this.formData.property.annualFlood = data.annualFlood,
        this.formData.property.agent = data.agent,
        this.formData.property.homePlan = data.homePlan,
        this.formData.property.purchaseAgreement = data.purchaseAgreement,
        this.formData.property.equity = data.equity
        // Validate Address Step in Workflow
        //this.formflowService.validateStep(STEPS.address);
    }

    getStep3() : Step3 {
        // Return the Income data
        var income: Step3 = {
            annualincome: this.formData.finances.annualincome,
            totalassets:this.formData.finances.totalassets
        };
        return income;
    }
    setStep3(data: Step3){
        this.isStep3FormValid = true;
        this.formData.finances.annualincome = data.annualincome,
        this.formData.finances.totalassets = data.totalassets
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