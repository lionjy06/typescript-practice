import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, JoinColumn } from 'typeorm'
import 'reflect-metadata'
import { User } from './user.entity'

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    description:string

    @ManyToOne(() => User, (user) => user.product)
    @JoinColumn({name:'userId'})
    user:User
}