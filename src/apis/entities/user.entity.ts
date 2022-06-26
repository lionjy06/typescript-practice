import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from 'typeorm'
import 'reflect-metadata'
import { Product } from './product.entity'

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


    @OneToMany(() => Product, (product) => product.user)
    product:Product[]
}