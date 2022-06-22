import express from 'express'
import { Request, Response } from 'express'
import dotenv from 'dotenv-flow'
import { createConnection, DataSource, Logger } from "typeorm"
import loger from 'morgan'
import api from './apis/router'
import 'reflect-metadata'
import { User } from './apis/entities/user.entity'


const app = express()


export const AppDataSource = new DataSource({
    "type": "mysql",
    "host": "rise-ott-test.c1jy3xu5st4b.ap-northeast-2.rds.amazonaws.com",
    "port": 3306,
    "username": "brad",
    "password": "00000000",
    "database": "brad_practice",
    "entities": [
       __dirname + './apis/entities/*.entity.*'
    ],
    "synchronize": true,
    "logging":true
})

console.log(`ssdfsdfsdf::::${__dirname}`)


AppDataSource.initialize()
.then(() => console.log('db is up and ready'))
.catch((err) => console.log(`this is db err: ${err}`))

app.use(loger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',api)


app.get('/',(req,res) => {
    return res.send('start')
})

console.log('-----hi')

app.listen(4000,() => {
    console.log('server is up and ready')
})