import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm'
import 'reflect-metadata'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number
}