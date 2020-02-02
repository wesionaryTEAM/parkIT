export interface userDataProps {
    first_name?:string;
    last_name?:string;
    email:string;
    password:string;
    confirmPassword?:string;
    loginUser:(userData:any,history:any)=>void;
    history:any;
  

}