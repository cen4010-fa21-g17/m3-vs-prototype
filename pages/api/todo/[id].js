import dbConnect from '../../../utils/dbConnect'
import TodoModel from '../../../models/todo'

// Request handler function
export default async function handler(req, res) {

  // Connect to database or reuse previous connection
  await dbConnect()

  // Handle request methods
  switch (req.method) {

    // Get all todos from database
    case 'GET':
      try {
        const todo = await TodoModel.findById(req.query.id)
        res.json(todo)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Find and delete a todo from database
    case 'DELETE':
      try {
        const todo = await TodoModel.findById(req.query.id)
        todo.remove()
        res.json({ message: 'Deleted todo' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break;

    // Method not implemented
    default:
      res.status(501).json({ message: 'Request method not implemented' })
  }
}