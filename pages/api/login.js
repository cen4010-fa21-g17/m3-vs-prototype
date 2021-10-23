
import dbConnect from '../../utils/dbConnect'
import UserModel from '../../models/user'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {
          
    // Get all todos from database
    case 'POST':
        try {
            const user =  await UserModel.findOne({ username: req.body.username, password: req.body.password })
            if (user)
              res.status(202).json({ user, message: "Login successful" })
            else 
              res.status(401).json({ user, message: "Incorrect credentials" })
        } catch (err) {
            res.status(500).json({ message: err.message})
        }
      break;
    // Method not implemented
    default:
      console.log('ran the defulat')
      res.status(501).json({ message: 'Request method not implemented' })
  }

}