import pg from 'pg'
import 'dotenv/config'


const { Pool } = pg
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env

console.log(process.env)

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    host: DB_HOST
}



