import { User } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    nombre: string

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToMany(() => User, user => user.rol)
    users: User[]
}