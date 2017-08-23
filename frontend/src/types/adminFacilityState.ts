export interface AdminFacilityState{
    activeItem:string;
    user:{
        name: string;
        email: string;
        time: any;
        dropdown: Array<any>;
    },
    error:{
        name: boolean;
        email: boolean;
        time: boolean;
        addUser: boolean;
    },
    errorMsg:{
        name:string;
        email:string;
        addUser:string;
    }
}