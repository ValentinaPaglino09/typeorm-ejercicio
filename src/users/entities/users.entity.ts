import { Auto } from "src/autos/entities/auto.entity";
import { Direccion } from "src/direcciones/entities/direccion.entity";
import { Lenguaje } from "src/lenguajes/entities/lenguaje.entity";
import { Rol } from "src/roles/entities/rol.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
 @PrimaryGeneratedColumn('increment')
 id: number; 

 @Column('text')
 nombre: string;

 @Column('text')
 apellido: string;

 @Column('int')
 dni: number;

 @CreateDateColumn()
 createdAt: Date

 @DeleteDateColumn()
 deletedAt: Date

 @ManyToOne(() => Direccion, dir => dir.user )
 direccion: Direccion

 @OneToMany(() => Auto, auto => auto.user)
auto: Auto

 @ManyToOne(() => Rol, rol => rol.users)
 rol: Rol

 @ManyToOne(() => Lenguaje, leng => leng.users)
 lenguaje: Lenguaje 
}