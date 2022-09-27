export interface InfoUser {
    address: string;
    num_phone: string;


}

export interface User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password?: string;
    type?: string;
    infouser?: InfoUser 
}