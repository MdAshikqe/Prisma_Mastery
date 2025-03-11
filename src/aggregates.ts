import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const aggregations= async()=>{
    const avgAge= await prisma.user.aggregate({
        _sum:{
            age:true
        }
    })  // sum/avg/min/max/count use
    console.log({avgAge});
}

aggregations();