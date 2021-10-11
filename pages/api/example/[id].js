import dbConnect from '../../../utils/dbConnect'
import ExampleModel from '../../../models/example'

export default async function handler(req, res) {

  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const example = await ExampleModel.findById(req.query.id)
        res.json(example)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;
    case 'DELETE':
      try {
        const example = await ExampleModel.findById(req.query.id)
        example.remove()
        res.json({ message: 'Deleted example' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}