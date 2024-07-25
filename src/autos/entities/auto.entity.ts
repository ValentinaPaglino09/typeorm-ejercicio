import { User } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auto {
 @PrimaryGeneratedColumn('increment')
 id: number;

 @Column('text')
 patente: string;

 @Column('text')
 marca: string;

 @Column('text')
 modelo: string;

 @Column('text')
 color: string;

 @CreateDateColumn()
 createdAt: Date

 @DeleteDateColumn()
 deletedAt: Date

 @ManyToOne(()=> User, user => user.auto)
 user: User
}