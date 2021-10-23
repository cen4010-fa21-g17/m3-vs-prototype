import dbConnect from '../../../../utils/dbConnect'
import UserModel from '../../../../models/user'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

    // Get all todos from database
    case 'GET':
      try {
        const user = await UserModel.findOne({ Username: `${req.query.username}` })
        res.json(user)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Find and delete a todo from database
    case 'DELETE':
      try {
        const user = await UserModel.findById(req.query.id)
        user.remove()
        res.json({ message: 'Deleted User' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}