export class AmbassadorRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    pickUpLocation: string;
    dropOffLocation: string;
    // email: string;
    date: Date;
    ambassadorId: number

    constructor(firstName: string, lastName: string, phoneNumber: string, pickUpLocation: string,
        dropOffLocation: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pickUpLocation = pickUpLocation;
        this.dropOffLocation = dropOffLocation;
        this.phoneNumber = phoneNumber;
    }
}