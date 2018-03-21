export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Step1 {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}

export class Step2 {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}