export interface authState{
    isAuthenticated:boolean;
    email:string | null;
    first_name:string | null;
    role:string| null;
    access_token:string| null;
}