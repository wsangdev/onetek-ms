import { Kafka, Kafka } from 'kafkajs'
import { env } from './env';

const Kafka = new Kafka({
  clientId: 'user-service',
  brokers: [env.KAFKA_BROKER]
})

const producer = Kafka.producer();

const initKafkaProducer = async () => {
  try {
    await producer.connect();
    console.log('kafka producer connected')
  } catch (err) {
    console.log('error contectando kafka Producer', err)
  }
}

export { producer, initKafkaProducer }