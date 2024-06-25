import dotenv from 'dotenv'

dotenv.config()

export const env = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  KAFKA_BROKER: process.env.KAFKA_BROKER
}