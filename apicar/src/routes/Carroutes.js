import multer from 'fastify-multer'
import * as Carcontroller from '../controller/Carcontroller.js'
import path from 'path'


const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'public/images');
  },
  filename:(req,file,cb) =>{
    const extension = path.extname(file.originalname);
    cb(null,file.fieldname + '-' + Date.now() + extension);
  }
});
const upload = multer ({ storage });

const Carroutes = {

  GetCar:{
    method: "GET",
    url: "/car",
    handler: Carcontroller.getAll, 
  },
  PostCar: {
    method: "POST",
    url: "/car",
    preHandler: upload.single('image_url'),
    handler: Carcontroller.create,
  },
  PutCar:{
    method: "PUT",
    url: "/car/:id",
    preHandler :upload.single('image_url'),
    handler: Carcontroller.update, 
  },
  PatchCar:{
    method: "PATCH",
    url: "/car/:id",
    preHandler:upload.single('image_url'),
    handler: Carcontroller.updatesingle, 
  },
  DeleteCar:{
    method: "DELETE",
    url: "/car/:id",
    handler: Carcontroller.Delete
  },


};
const gruproute = Object.values(Carroutes)

export default (fastify, _, next) => {
  for (let route of gruproute) {
    fastify.route(route)}
  next()
};
