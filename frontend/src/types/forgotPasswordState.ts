export interface ForgotPasswordState{
    success:{
        isSubmitted: boolean;
    }
    user:{
        email: string;
      },
      errors:{
        errorMsg: string;
        error: boolean;
      }
    }