// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/dbConnect'
import TodoModel from '../../../models/todo'


export default async function handler(req, res) {

  await dbConnect()

  switch (req.method) {
      case 'GET':
        try {
          const allTodos = await TodoModel.find()
          res.json(allTodos)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;

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
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}
