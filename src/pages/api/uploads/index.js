import nextConnect from 'next-connect';
import multer from 'multer';
import axios from 'axios'
import fs from 'fs'
import path from 'path'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: async (req, file, cb) => {
     

      console.log(req.body)

      cb(null,  req.body.profilePicture)
    }
  }),
})

const apiRoute = nextConnect({
  onError(error, req, res) {
      console.log(error)
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('theFiles'));

apiRoute.post((req, res) => {
  
  
  res.status(200).json({ data: 'success' });
});

apiRoute.delete((req, res) => {
  console.log(req.body)
  fs.unlink(path.join(__dirname, '..', '..', req.body.profilePicture), err => {
    if (err)
      console.log(err)
  })
})

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};