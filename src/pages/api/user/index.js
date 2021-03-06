import dbConnect from '../../../utils/dbConnect'
import UserModel from '../../../models/user'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get all users from database
      case 'GET':
        try {
          const allUsers = await UserModel.find()
          res.json(allUsers)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;


      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}
