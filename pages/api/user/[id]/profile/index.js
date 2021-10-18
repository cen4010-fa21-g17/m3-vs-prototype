import dbConnect from '../../../../../utils/dbConnect'
import ProfileModel from '../../../../../models/Profile'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get all Profiles from database
      case 'GET':
        try {
          const allProfile = await ProfileModel.findOne({user_id: `${req.query.id}`})
          res.json(allProfile)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

    // Find and delete a experience from database
    case 'DELETE':
      try {
        const profile = await ProfileModel.findById(req.query.id)
        profile.remove()
        res.json({ message: 'Deleted Profile' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}