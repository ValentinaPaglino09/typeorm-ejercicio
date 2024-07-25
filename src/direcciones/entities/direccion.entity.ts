import { User } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Direccion {
 @PrimaryGeneratedColumn('increment')
 id: number;

 @Column('text')
 calle: string;

 @Column('int')
 numero: number;

 @Column('text')
 localidad: string;

 @Column('text')
 provincia: string;

 @Column('text')
 pais: string

 @CreateDateColumn()
 createdAt: Date

 @DeleteDateColumn()
 deletedAt: Date

 @OneToMany(() => User, user => user.direccion)
 user: User[]
}