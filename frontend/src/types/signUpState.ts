export interface SignUpState{
    success:{
        isSubmitted: boolean;
    },
    user:{
        firstName: string;
        lastName: string;
        companyName: string;
        email: string;
        password: string;
        confirmPasword: string;
    },
    error:{
        firstName: boolean;
        lastName: boolean;
        companyName: boolean;
        email: boolean;
        password: boolean;
        confirmPasword: boolean;
    },
    errorMsg:{
        firstName:string;
        lastName: string;
        companyName: string;
        email: string;
        password: string;
        confirmPasword: string;
    }
}