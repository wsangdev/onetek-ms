// aqui informacion de postgres js 
import {Sequelize} from 'sequelize'
import { env } from '../config/env.js' // Traendo de la configuracion env

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: 'postgres'
  }
)

export default sequelize
