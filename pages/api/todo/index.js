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
          const allTodos = await TodoModel.find()
          res.json(allTodos)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Create a todo and post it to database
      case 'POST':
        const todo = new TodoModel({
          text: req.body.text
        })
        try {
          const newtodo = await todo.save()
          res.status(201).json(newtodo)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

      // Method not implemented
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}
