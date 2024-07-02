

export type CreateUserParams = {

    firstName:string;
    lastName: string;
    email:string;
    phoneNumber:string;
    province: string;
    district:string;
    sector:string;
    role:string;
    password:string;
}

export type UpdateUserParams = {

    firstName:string;
    lastName: string;
    email:string;
    phoneNumber:string;
    province: string;
    district:string;
    sector:string;
    role:string;
    gender: string;
    password:string;
}

export type CreateUserProfileParams = {
    level: string;
    domain: string[];
    description: string;
    otherInterest: string;
    imageUrl: string;
    
}
