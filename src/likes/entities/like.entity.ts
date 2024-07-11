import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => User, user => user.givenLikes)
    user: User;
  
    @ManyToOne(() => User, user => user.receivedLikes)
    tutor: User;

   
}
