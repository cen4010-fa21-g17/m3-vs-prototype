import dbConnect from '../../../../../utils/dbConnect'
import PortfolioModel from '../../../../../models/portfolio'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

      // Get all experiences from a single user from the database
      case 'GET':
        try {
          console.log('tried getting portfolio information for use - ' + `${req.query.id}`)
          const allPortfolio = await PortfolioModel.find({user_id: `${req.query.id}`})
          //const portfolio = await PortfolioModel.find({user_id: `${req.query.id}` })
          res.json(allPortfolio)
        } catch (err) {
          console.log('tried getting portfolio information failure' + err.message )

          res.status(500).json({ message: err.message })
        }
        break;

      // Create an experience for an user and post it to the database
      case 'POST':
        const portfolio = new PortfolioModel({
          user_id: req.query.id,
          biography: req.body.biography,
          goal1: req.body.goal1,
          goal2: req.body.goal2,
          goal3: req.body.goal3,
          goal4: req.body.goal4
        })
        console.log(portfolio)
        try {
          console.log('tried saving')
          const newPortfolio = await portfolio.save()
          console.log('success')
          res.status(201).json(newPortfolio)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

        case 'PUT':
          try {
              console.log('changing portfolio information for user - ' + `${req.query.id}`)
              const portfolio = await PortfolioModel.findOneAndUpdate({
                user_id: req.query.id,
                biography: req.body.biography,
                goal1: req.body.goal1,
                goal2: req.body.goal2,
                goal3: req.body.goal3,
                goal4: req.body.goal4
              })
              res.json(portfolio)
          } catch (err) {
              res.status(500).json({ message: err.message })
          }
          break;

      // case 'PUT':
      //   try {
      //     const experience = await ExperienceModel.findOneAndUpdate({ user_id: req.query.id }, req.body, {
      //         new: true
      //     })
      //     res.json(experience)
      // } catch (err) {
      //     res.status(500).json({ message: err.message })
      // }
      // break;

      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}