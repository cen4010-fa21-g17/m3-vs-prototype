// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/dbConnect'
import ExampleModel from '../../../models/example'


export default async function handler(req, res) {

  await dbConnect()

  switch (req.method) {
      case 'GET':
        try {
          const allExamples = await ExampleModel.find()
          res.json(allExamples)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;
      case 'POST':
        const example = new ExampleModel({
          text: req.body.text
        })
        try {
          const newExample = await example.save()
          res.status(201).json(newExample)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
        break;
      default:
        res.status(501).json({ message: 'Request method not implemented' })
  }
}
