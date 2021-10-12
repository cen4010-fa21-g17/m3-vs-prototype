import dbConnect from '../../../utils/dbConnect'
import TodoModel from '../../../models/todo'

export default async function handler(req, res) {

  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const todo = await TodoModel.findById(req.query.id)
        res.json(todo)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;
      
    case 'DELETE':
      try {
        const todo = await TodoModel.findById(req.query.id)
        todo.remove()
        res.json({ message: 'Deleted todo' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}