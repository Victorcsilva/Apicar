import multer from 'fastify-multer'
import * as CarController from '../controllers/Carcontroller.js'
import path from 'path'


const storage = multer.diskStorage({
  destination: (req,res,cb) =>{
    cb(null, 'public/images')
  },
  filename:(req,file,cb) =>{
    const extension = path.extname(file.originalname)
    cb(null,file.fieldname + '-' + Date.now() + '.' + extension);
  }
});
const upload = multer ({ storage });

const CarRoutes = {

  Getcar:{
    method: "GET",
    url: "/car",
    handler: CarController.getAll, 
  },
  PostCar: {
    method: "POST",
    url: "/car",
    preHandler: upload.single('image_url'),
    handler: CarController.create,
  },
  PutCar:{
    method: "PUT",
    url: "/car/:id",
    preHandler :upload.single('image_url'),
    handler: CarController.update, 
  },
  PatchCar:{
    method: "PATCH",
    url: "/car/:id",
    preHandler :upload.single('img'),
    handler: CarController.updatesingle, 
  },
  DeleteCar:{
    method: "DELETE",
    url: "/car/:id",
    handler: CarController.Delete
  },


};
const gruproute = Object.values(CarRoutes)

// eslint-disable-next-line import/no-anonymous-default-export
export default (fastify, _, next) => {
  for (const route of gruproute) {
    fastify.route(route)}
  next()
};
