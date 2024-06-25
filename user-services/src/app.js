import express from 'express'
import sequelize from './db/postgres.js'
import userRouter from './router/user.Routes.'
import { initKafkaProducer } from './config/kafka.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());

//Inicializar la conexion a la base de datos 
(async () => {
  try {
    await sequelize.authenticate()
    console.log('conection a postgrase es establecida exitosamente')

    // sincronizar los modelos 
    await sequelize.sync();
    console.log('todos los modelos sincronizados correctamente')

    // Inicializar kafka Producer
    await initKafkaProducer();
  }
  catch (err) {
    console.log('no se pudo conectar a la database', err)
  }
})()

// Usar las rutas definidas 
app.use('/api/users', userRouter)

// Configura el Puesto y ESCUCHAR
const PORT = env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`user-service corriendo en puerto ${PORT}`)
});

