export class AmbassadorRequest {
    requestId: number;
    firstName: string;
    lastName: string;
    pickUpLocation: string;
    dropOffLocation: string;
    phoneNumber: string;
    email: string;

    constructor(requestId: number, firstName: string, lastName: string, pickUpLocation: string,
        dropOffLocation: string, phoneNumber: string, email: string) {
        this.requestId = requestId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pickUpLocation = pickUpLocation;
        this.dropOffLocation = dropOffLocation;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}