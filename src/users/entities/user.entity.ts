import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./profile.entity";
import { Like } from "src/likes/entities/like.entity";

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

   @OneToOne(()=>UserProfile, { cascade: true, onDelete: 'CASCADE' })
   @JoinColumn()
   userProfile: UserProfile;

   @OneToMany(() => Like, like => like.tutor, { cascade: true, onDelete: 'CASCADE' })
   receivedLikes: Like[];
 
   @OneToMany(() => Like, like => like.user)
   givenLikes: Like[];

   @Column({ default: 0 })
   likeCount: number;

   

}




