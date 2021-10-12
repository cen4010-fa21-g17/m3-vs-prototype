import dbConnect from '../../../utils/dbConnect'
import UserModel from '../../../models/user'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get all todos from database
      case 'GET':
        try {
          const allUser = await UserModel.find()
          res.json(allUser)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Create a todo and post it to database
      case 'POST':
        const user = new UserModel({
          Username: req.body.Username,
          Password: req.body.Password
        })
        try {
          const newuser = await user.save()
          res.status(201).json(newuser)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}
