import { ArrayNotEmpty } from "class-validator";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserProfile{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    level: string;

    @ArrayNotEmpty({message:'subject can not be empty!'})
    @Column('simple-array', { default: '' })
    domain:string[] ;

    @Column()
    description: string;

    @Column({nullable:true})
    otherInterest: string;

    @Column()
    imageUrl: string;  
    
}