export interface AdminDashboardState{
    facility:{
        name: string;
        cost: any;
    },
    button:{
        disabled: boolean;
    },
    activeItem: string;
}