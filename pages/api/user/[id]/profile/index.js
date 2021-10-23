import dbConnect from '../../../../utils/dbConnect'
import profileModel from '../../../../models/profile'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get profile info for a single user from the database
      case 'GET':
        try {
          const allprofile = await profileModel.findOne({userid: `${req.query.id}`})
          res.json(allprofile)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}