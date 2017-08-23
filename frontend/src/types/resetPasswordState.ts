export interface ResetPasswordState{
    user:{
        password: string;
        confirmPasword: string;
    },
    error:{
        password: boolean;
        confirmPasword: boolean;
    },
    errorMsg:{
        password: string;
        confirmPasword: string;
    }
}