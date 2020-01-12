export class User {
    userid(userid: any) {
      throw new Error("Method not implemented.");
    }
      id: number;
      firstName : string;
      lastName : string;
      email : string;
      password: string;
  
      constructor(id:number, firstName:string, lastname:string, email:string, password:string){
          this.id = id;
          this.firstName = firstName;
          this.lastName = lastname;
          this.email = email;
          this.password = password;
      }
  
  }