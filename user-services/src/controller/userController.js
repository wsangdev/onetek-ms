import User from '../model/user.js'
import { sendUserRegisteredMessage } from '../producers/userProducer.js'

export const registerUser = async(req, res) => {
  try {
    const user = await User.create(req.body)

    // Enviar mensaje a kafka 
    await sendUserRegisteredMessage(user)
  } 
  catch (err) {
    res.status(500).send(err)
  }
}