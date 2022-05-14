import { prisma } from "../helpers/utils.js";

export const getAll = async function (_, reply) {
  try {
    const car = await prisma.car.findMany();
    return reply.send(car);
  } catch (error) {
    console.error(error)
    reply.status(500).send("Não foi possível cadastrar o carro");
  }
};

export const create = async (req, reply) => {
  const { name,year, brand_id } = req.body;
  const img =req.file
  try {
    const car = await prisma.car.create({
      data: {
        name,
         year,
           brand: {
            connect: { id:parseInt(brand_id) } },
              image_url: img.path,
      },
    });
    reply.send(car);
  } catch (error) {
    reply.status(500).send("error");
  }
};

export const update = async (req,reply) => { 
  try{
      const{id} = req.params
      const { name,year, brand_id } = req.body;
      const img =req.file
      const updatecar = await prisma.car.update({
        where: {id:+id},
        data: {
          name,
           year,
             brand: {
              connect: { id:parseInt(brand_id) } },
                image_url: img.path,
        },
      })
      return reply.status(200).send(updatecar)
    }catch (error){
      reply.status(500).send({error:"Erro no servidor"})
    }
}

export const Delete = async (req,reply) => {
  try {
   const {id} = req.params
    const deletecar = await prisma.car.delete({
      where: {id:+id}
    })
    return reply.status(200).send(deletecar)
  } catch (error) {
    reply.status(500).send({error:"Erro no Servidor"})
    
  }
 
}

export const updatesingle = async (req,reply) => {
   const {id} = req.params
   const updatepatch = await prisma.car.update({
     where:{id:+id}
    })
  
   let data = {} 
  
   if(req.body.name){
     data.name =req.body.name
   }
   
  if (req.body.year) {
    data.year = req.body.year
  }

  if (req.body.brand) {
    data.brand = req.body.brand_id

  if (req.file) {
    data.image_url = req.img.path
  }
  try{
    return reply.status(200).send(updatepatch)
  } catch (error) {
    reply.status(500).send({error:"Erro no Servidor"})
    
  }
}

}