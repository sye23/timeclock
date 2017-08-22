export interface AdminLoginState{
    user:{
        email: string;
        password: string;
    },
    error:{
        email:boolean;
    },
    errorMsg:{
        email:string;
    }
}