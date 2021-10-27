import dbConnect from '../../../../../utils/dbConnect'
import AccountModel from '../../../../../models/account'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

    // Handle request methods
    switch (req.method) {

      // Get account info for a single user from the database
    case 'GET':
        try {
          const account = await AccountModel.findOne({user_id: req.query.id })
          res.json(account)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

    case 'PUT':
        try {
            const account = await AccountModel.findOneAndUpdate({ user_id: req.query.id }, req.body, {
                new: true
            })
            res.json(account)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
        break;


      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}