import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const DeleteData= async()=>{
//    const deleteOne= await prisma.post.delete({
//     where:{
//         id:1
//     }

//    })

const deleteMany= await prisma.post.deleteMany({
    where:{
        published:false
    }
})

   console.log({deleteMany});

}

DeleteData();