import nextConnect from 'next-connect';
import multer from 'multer';
import axios from 'axios'
import fs from 'fs'
import path from 'path'

const apiRoute = nextConnect({
  onError(error, req, res) {
      console.log(error)
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete((req, res) => {
  console.log(req.body)
  fs.unlink(path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'uploads', req.query.profilePicture), err => {
    if (err)
      console.log(err)
  })
})

export default apiRoute;
