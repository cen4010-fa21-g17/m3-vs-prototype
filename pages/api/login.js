
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
            const user =  await UserModel.findOne({Username: `${req.query.Username}`, Password: `${req.query.Password}`})
            console.log (user)
            if (user) {
              res.status(201).json({ message: 'Login successful'})
            }
            else {
              res.status(201).json({message: 'Incorrect Username or Password'})
            }
            
        } catch (err) {
  
            res.status(500).json({ message: err.message})
        }
  
    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }

}