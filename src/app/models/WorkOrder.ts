export class WorkOrder {
    
    id: number;
    firstName : string;
    lastName : string;
    description : string;
    location : string;

    constructor(id:number, firstName:string, lastname:string, description: string, location: string, ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastname;
        this.description = description;
        this.location = location;
    }
}