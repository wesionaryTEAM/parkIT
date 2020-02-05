export interface userDataProps {
    firstName?:string;
    lastName?:string;
    email:string;
    password:string;
    confirmPassword?:string;
    loginUser:(userData:any,history:any)=>void;
    history:any;
  

}