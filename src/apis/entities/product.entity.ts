import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import 'reflect-metadata'

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    description:string
}