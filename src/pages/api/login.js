
import dbConnect from '../../utils/dbConnect'
import UserModel from '../../models/user'
import AccountModel from '../../models/account'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {
          
    // Send username and password info to server to authenticate
    case 'POST':
        try {
            const account =  await AccountModel.findOne({ username: req.body.username, password: req.body.password })
            if (account)
              res.status(202).json({ username: account.username, message: "Login successful" })
            else 
              res.status(401).json({ message: "Incorrect credentials" })
        } catch (err) {
            res.status(500).json({ message: err.message})
        }
      break;

    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }

}