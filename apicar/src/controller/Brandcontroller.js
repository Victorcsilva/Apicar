import { prisma } from "../helpers/utils.js";

export const getAll = async function (_, reply) {
  try {
    const brands = await prisma.brand.findMany();
    return reply.send(brands);
  } catch (error) {
    console.error(error)
    reply.status(500).send("error");
  }
};

export const create = async (req, reply) => {
  const { name } = req.body;
  
  try {
    const brand= await prisma.brand.create({
      data: {name},
    });
    reply.send(brand);
  } catch (error) {
    reply.status(500).send("error");
  }
};

export const deletebrand = async (req,reply) => {

  try{
    const {id} = req.params
    const deletebrand = await prisma.brand.delete({
      where:{id:+id}
    })
    return reply.status(200).send(deletebrand)
   }catch (error){
      reply.status(500).send({error:"error"})
    }
  }

  export const update = async (req,reply) =>{
   try {
     const {id} = req.params
     const {name} = req.body
     const updatebrand = await prisma.brand.update({
       where:{id:+id},
       
       data:{name}
     })
     return reply.status(200).send(updatebrand) 
   }catch (erro){
     reply.status(500).send({error:"Não foi possivel atualizar"})
   }
  }