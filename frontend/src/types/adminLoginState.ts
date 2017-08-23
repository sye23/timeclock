export interface AdminLoginState{
    user:{
        email: string;
        password: string;
    },
    error:{
        email:boolean;
        password:boolean;
    },
    errorMsg:{
        email:string;
        password: string;
    }
}