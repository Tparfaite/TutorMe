import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./profile.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({unique:true})
    email:string;

    @Column()
    phoneNumber:string;

    @Column()
    province:string;

    @Column()
    district:string;

    @Column()
    sector:string;

    @Column()
    password:string;

    @Column({type:'enum', enum:['parent','tutor','admin']})
    role:string;

    @Column({type:'enum', enum:['male','female']})
    gender:string;


    @Column()
    createdAt:Date;

   @OneToOne(()=>UserProfile)
   @JoinColumn()
   userProfile: UserProfile
   

}




