import { RequestHandler } from 'express'

export type CreateUser = {
    firstName?:string,
    lastName?:string,
    age?:number,
    email?:string
}

export type TestUser = {
    createUser: CreateUser
}