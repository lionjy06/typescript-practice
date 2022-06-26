import { String } from "aws-sdk/clients/appstream";
import { RequestHandler } from "express";
import { User } from "../entities/user.entity";

export type CreateProduct = RequestHandler<
    unknown,
    string | unknown,
    { name:string, description:string, price:number, userId:number},
    Record<string, any>
>

export type FindProduct = RequestHandler<
    unknown,
    string | unknown,
    {name:string},
    Record <string, any>
>

export type ProductHandler = {
    createProduct:CreateProduct,
    findProduct:FindProduct
}