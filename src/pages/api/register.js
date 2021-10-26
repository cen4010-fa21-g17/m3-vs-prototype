import dbConnect from '../../utils/dbConnect'
import UserModel from '../../models/user'
import AccountModel from '../../models/account'


// Request handler function
export default async function handler(req, res) {

    // Connect to database or reuse previous connection
    await dbConnect()
  
    // Handle request methods
    switch (req.method) {
        
        // Create a new user and store account information in the database
        case 'POST':
            const user = new UserModel({ profileName: req.body.username, profileContent: 'My Profile' })
            const account = new AccountModel({ user_id: user._id, username: req.body.username, password: req.body.password })
            console.log(user)
            try {
                const newUser = await user.save()
                await account.save()
                res.status(201).json(newUser)
            } catch (err) {
                res.status(500).json({ message: err.message})
            }
            break;
        // Method not implemented
        default:
          res.status(501).json({ message: 'Request method not implemented' })
    }
  }

  