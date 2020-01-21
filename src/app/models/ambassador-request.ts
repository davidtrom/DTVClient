export class AmbassadorRequest {
    requestId: number;
    firstName: string;
    lastName: string;
    // email: string;
    phoneNumber: string;
    pickUpLocation: string;
    dropOffLocation: string;
    ambassador: any;
    date: Date;

    constructor(requestId: number, firstName: string, lastName: string, phoneNumber: string, 
        pickUpLocation: string, dropOffLocation: string, ambassador: any, date: Date) {
        this.requestId = requestId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pickUpLocation = pickUpLocation;
        this.dropOffLocation = dropOffLocation;
        this.phoneNumber = phoneNumber;
        this.ambassador = ambassador;
        this.date = date;
    }
}