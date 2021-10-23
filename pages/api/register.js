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
            const user = new UserModel({ username: req.body.username, password: req.body.password})
    
            try {
                const newUser = await user.save()
                res.status(201).json(newUser)
            } catch (err) {
                res.status(500).json({ message: err.message})
            }
    
        // Method not implemented
        default:
          res.status(501).json({ message: 'Request method not implemented' })
    }
  }

  