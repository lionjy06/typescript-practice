import { DataSource } from 'typeorm'
import "reflect-metadata"

const db = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "database": "testDB",
    "entities": [
       __dirname + './**/*.entity.*'
    ],
    "synchronize": true,
    "logging":true
})

db.initialize()
.then(() => console.log('db is up and ready'))
.catch((err) => console.log(`this is db err: ${err}`))

