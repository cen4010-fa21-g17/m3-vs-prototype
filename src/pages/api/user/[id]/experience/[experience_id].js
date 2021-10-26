import dbConnect from '../../../../../utils/dbConnect'
import ExperienceModel from '../../../../../models/experience'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()
 
  // Handle request methods
  switch (req.method) {

    // Get info from a single experience from a single user from the database
    case 'GET':
      try {
        const experience = await ExperienceModel.findById(req.query.experience_id)
        res.json(experience)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Find and delete an experience from the database
    case 'DELETE':
      try {
        const experience = await ExperienceModel.findById(req.query.experience_id)
        experience.remove()
        res.json({ message: 'Deleted Experience' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}