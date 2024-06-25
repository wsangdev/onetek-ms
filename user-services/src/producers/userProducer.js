import { producer } from "../config/kafka.js";

const sendUserRegisteredMessage = async (user) => {
  try {
    await producer.send({
      topic: 'user-registered',
      messages: [
        { value: JSON.stringify(user) }
      ],
    });
    console.log('user registered message sent:', user)
  } catch (err) {
    console.log('failed to send user registerd message', err);
  }
};

export {sendUserRegisteredMessage}


