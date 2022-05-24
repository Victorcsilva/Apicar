import * as Brandcontroller from '../controller/Brandcontroller.js'


const BrandRoutes ={
 CreateBrand: {
    method: "POST",
    url: "/brands",
    handler: Brandcontroller.create,
 },
  GetBrand: {
  method: "GET",
  url: "/brands",
  handler: Brandcontroller.getAll,
},
PutBrand:{
  method: "PUT",
  url: "/brands/:id",
  handler: Brandcontroller.update, 
},
DeleteBrand:{
  method: "DELETE",
  url: "/brands/:id",
  handler: Brandcontroller.deletebrand, 
},  
};
const gruproute = Object.values(BrandRoutes)

export default (fastify, _, next) => {
  for (let route of gruproute) {
    fastify.route(route);
  }
  next()
};
