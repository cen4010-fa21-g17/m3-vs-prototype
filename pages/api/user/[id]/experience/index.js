import dbConnect from '../../../../utils/dbConnect'
import ExperienceModel from '../../../../models/experience'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get all experiences from database
      case 'GET':
        try {
          const allExperience = await ExperienceModel.find({userid: `${req.query.id}`})
          res.json(allExperience)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Create a experience and post it to database
      case 'POST':
        const experience = new ExperienceModel({
          content: req.body.content,
          skills: req.body.skills
        })
        try {
          const newexperience = await experience.save()
          res.status(201).json(newexperience)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}