import dbConnect from '../../../utils/dbConnect'
import UserModel from '../../../models/user'

// Request handler function
export default async function handler(req, res) {

    // Connect to database or reuse previous connection
    await dbConnect()

    // Handle request methods
    if (req.method == "GET") 
    {
        try {
            const user = await UserModel.findById(req.query.id)
            res.json(user)
          } catch (err) {
            res.status(500).json({ message: err.message })
          }
          break;
    }
    else 
    {
        res.status(501).json({ message: 'Request method not implemented'})
    }
  
  }