
import dbConnect from '../../../utils/dbConnect'
import UserModel from '../../../models/user'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  if (req.method == "POST") {

    try {
      const user = await UserModel.findByCredentials(req.body.user, req.body.password)
      const token = await UserModel.generateAuthToken();
      res.send({ user, token})
    } catch (err) {
      res.status(501).json({ message: 'Username or Password incorrect' })
    }
    break;
  }
  else
    {
      res.status(501).json({ message: 'User not found'})
    }

}