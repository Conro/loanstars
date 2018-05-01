import { ApplicationService } from './application.service';
import { Application } from './../shared/models/appplication-models/application.model';
import { Injectable }                        from '@angular/core';

import { FormData }       from '../shared/models/formData.model';
import { Step1, Step2, Step3 } from '../shared/models/appplication-models/steps.model'
import { FormFlowService }                   from './form-flow.service/form-flow.service';
import { STEPS }                             from './form-flow.service/form-steps.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import App from '../../../server/models/app';

@Injectable()
export class FormDataService {

    isEditing: boolean = false;
    isNewApp: boolean = false;

    private appData: Application;
    singleApp: Observable<Application>;
    private formData: FormData = new FormData();
    private isStep1FormValid: boolean = false;
    private isStep2FormValid: boolean = false;
    private isStep3FormValid: boolean = false;

    constructor(private formflowService: FormFlowService, private appService: ApplicationService) { 
        this.appData = new Application();
        //this.appData.clear();
        this.singleApp = new Observable<Application>();
    }

    loadApp(id: string): any {
        console.log("in loadApp: " + id)
        this.singleApp = this.appService.apps.pipe(
            map(apps => apps.find(item => item._id === id))
            );

        this.singleApp.subscribe(
            data => {
                this.isEditing = true;
            console.log("This is appData before assignment-----")
            console.log(this.appData);
            console.log(data)
            this.appData = Object.assign(new Application, data);
            
            console.log("NOW AFTER assignment----------------------")
            console.log(this.appData);
        });
    }

    saveCurrent() {
        this.appData.status.updatedDate = new Date();
        this.appService.update(this.appData);
        /*
        if(this.isEditing){
            this.appService.update(this.appData);
        }
        else {
            console.log("NOT EDITING CALLING CREATE")
            console.log(this.appData);
            this.isEditing = true;
            this.appService.create(this.appData);
        }
        */
    }

    getStep1(): Step1 {
        // Return the Personal data
        
        var personal: Step1 = {
            firstName: this.appData.step1.firstName,
            middleName: this.appData.step1.middleName,
            lastName: this.appData.step1.lastName,
            email: this.appData.step1.email,
            dob: this.appData.step1.dob,
            currentAddress1: this.appData.step1.currentAddress1,
            currentAddress2: this.appData.step1.currentAddress2,
            city: this.appData.step1.city,
            state: this.appData.step1.state,
            zipCode: this.appData.step1.zipCode,
            primaryPhone: this.appData.step1.primaryPhone,
            primaryPhoneType: this.appData.step1.primaryPhoneType,
            alternatePhone: this.appData.step1.alternatePhone,
            alternatePhoneType: this.appData.step1.alternatePhoneType,
            residencyStatus: this.appData.step1.residencyStatus
        };

        return personal;
    }

    setStep1(data: Step1) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isStep1FormValid = true;
        
            this.appData.step1.firstName = data.firstName;
            this.appData.step1.middleName = data.middleName;
            this.appData.step1.lastName = data.lastName;
            this.appData.step1.email = data.email;
            this.appData.step1.dob = data.dob;
            this.appData.step1.currentAddress1 = data.currentAddress1;
            this.appData.step1.currentAddress2 = data.currentAddress2;
            this.appData.step1.city = data.city;
            this.appData.step1.state = data.state;
            this.appData.step1.zipCode = data.zipCode;
            this.appData.step1.primaryPhone = data.primaryPhone;
            this.appData.step1.primaryPhoneType = data.primaryPhoneType;
            this.appData.step1.alternatePhone = data.alternatePhone;
            this.appData.step1.alternatePhoneType = data.alternatePhoneType;
            this.appData.step1.residencyStatus = data.residencyStatus;
            
            this.saveCurrent();
        // Validate Personal Step in Workflow
        //this.formflowService.validateStep(STEPS.personal);
    }


    getStep2() : Step2 {
        // Return the Address data
        var property: Step2 = {
            propertyType: this.appData.step2.propertyType,
            propertyAttached: this.appData.step2.propertyAttached,
            useOfProperty: this.appData.step2.useOfProperty,
            purchasePrice: this.appData.step2.purchasePrice,
            downPayment: this.appData.step2.downPayment,
            annualTaxes: this.appData.step2.annualTaxes,
            annualHazard: this.appData.step2.annualHazard,
            annualFlood: this.appData.step2.annualFlood,
            agent: this.appData.step2.agent,
            homePlan: this.appData.step2.homePlan,
            purchaseAgreement: this.appData.step2.purchaseAgreement,
            equity: this.appData.step2.equity
        };
        return property;
        
    }

    setStep2(data: Step2) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isStep2FormValid = true;
        this.appData.step2.propertyType = data.propertyType,
        this.appData.step2.propertyAttached = data.propertyAttached,
        this.appData.step2.useOfProperty = data.useOfProperty,
        this.appData.step2.purchasePrice = data.purchasePrice,
        this.appData.step2.downPayment = data.downPayment,
        this.appData.step2.annualTaxes = data.annualTaxes,
        this.appData.step2.annualHazard = data. annualHazard,
        this.appData.step2.annualFlood = data.annualFlood,
        this.appData.step2.agent = data.agent,
        this.appData.step2.homePlan = data.homePlan,
        this.appData.step2.purchaseAgreement = data.purchaseAgreement,
        this.appData.step2.equity = data.equity

        this.saveCurrent();
        // Validate Address Step in Workflow
        //this.formflowService.validateStep(STEPS.address);
    }

    getStep3() : Step3 {
        // Return the Income data
        var income: Step3 = {
            annualIncome: this.appData.step3.annualIncome,
            totalAssets: this.appData.step3.totalAssets
        };
        return income;
    }
    setStep3(data: Step3){
        this.isStep3FormValid = true;
        this.appData.step3.annualIncome = data.annualIncome,
        this.appData.step3.totalAssets = data.totalAssets

        this.saveCurrent();
    }

    getFormData(): Application {
        // Return the entire Form Data
        console.log("app data from getformdata");
        console.log(this.appData);
        return this.appData;
    }

    resetFormData(): Application {
        // Reset the workflow
        //this.formflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.appData.clear();
        //this.saveCurrent();
        //this.isStep1FormValid = this.isStep2FormValid = false;
        return this.appData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isStep1FormValid &&
                this.isStep2FormValid;
    }

    autofillSetStep1(data: Step1) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isStep1FormValid = true;
        
            this.appData.step1.firstName = "Marcus";
            this.appData.step1.middleName = "Layton";
            this.appData.step1.lastName = "Cunico";
            this.appData.step1.email = "mcunico@asu.edu";
            this.appData.step1.dob = "12/25/1994";
            this.appData.step1.currentAddress1 = "100 E Loanstar St.";
            this.appData.step1.currentAddress2 = data.currentAddress2;
            this.appData.step1.city = "Mesa";
            this.appData.step1.state =  "AZ";
            this.appData.step1.zipCode = "85000";
            this.appData.step1.primaryPhone = "4800000000";
            this.appData.step1.primaryPhoneType = "Cell";
            this.appData.step1.alternatePhone = data.alternatePhone;
            this.appData.step1.alternatePhoneType = data.alternatePhoneType;
            this.appData.step1.residencyStatus = "U.S. Citizen";
            
            this.saveCurrent();
    }

    autofillSetStep2(data: Step2) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isStep2FormValid = true;
        this.appData.step2.propertyType = "Apartment",
        this.appData.step2.propertyAttached = "no",
        this.appData.step2.useOfProperty = "Primary Residence",
        this.appData.step2.purchasePrice = "1000000",
        this.appData.step2.downPayment = "1000000",
        this.appData.step2.annualTaxes = "1000000",
        this.appData.step2.annualHazard = "1000000",
        this.appData.step2.annualFlood = "1000000",
        this.appData.step2.agent = "no",
        this.appData.step2.homePlan = "Less than 1 year",
        this.appData.step2.purchaseAgreement = "no",
        this.appData.step2.equity = "yes"

        this.saveCurrent();
        // Validate Address Step in Workflow
        //this.formflowService.validateStep(STEPS.address);
    }
    autofillSetStep3(data: Step3){
        this.isStep3FormValid = true;
        this.appData.step3.annualIncome = "1000000",
        this.appData.step3.totalAssets = "1000000"

        this.saveCurrent();
    }
}