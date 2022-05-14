import * as BrandController from '../controllers/Brandcontroller.js'


const BrandRoutes ={
  CreateBrand: {
    method: "POST",
    url: "/brands",
    handler: BrandController.create,
 },
  GetBrand: {
  method: "GET",
  url: "/brands",
  handler: BrandController.getAll,
},
PutBrand:{
  method: "PUT",
  url: "/brands/:id",
  handler: BrandController.update, 
},
DeleteBrand:{
  method: "DELETE",
  url: "/brands/:id",
  handler: BrandController.deletebrand, 
},  
};


const gruproute = Object.values(BrandRoutes)

// eslint-disable-next-line import/no-anonymous-default-export
export default (fastify, _, next) => {
  for (const route of gruproute) {
    fastify.route(route)}
  next()
};
