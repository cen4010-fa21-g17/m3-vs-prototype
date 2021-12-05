import dbConnect from '../../../../../utils/dbConnect'
import PortfolioModel from '../../../../../models/portfolio'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()
 
  // Handle request methods
  switch (req.method) {

    // Get info from a single experience from a single user from the database
    case 'GET':
      try {
        console.log('tried getting portfolio data with id ' + `${req.query.portfolio_id}`)
        const portfolio = await PortfolioModel.findById(req.query.portfolio_id)
        console.log('got data')
        res.json(portfolio)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

      case 'PUT':
          try {
            const portfolio  = await PortfolioModel.findOneAndUpdate({ _id: req.query.portfolio_id }, req.body, {
                new: true
            })
            res.json(portfolio)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
        break;

    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}