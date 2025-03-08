import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const main=async()=>{
    //get all post
    const getAllPostDB=await prisma.post.findMany({
        select:{
            title:true,
            content:true,
            authtorName:true,
            
        }
    });

    //find first or find first throw
    const findFisrt= await prisma.post.findFirstOrThrow({
        where:{
            id:2
        },
        select:{
            title:true,
            content:true,
            authtorName:true,

        }
    })

    //find unique or find unique throw
    const findUniqe= await prisma.post.findUniqueOrThrow({
        where:{
            id:2
        }
    })

    console.log({getAllPostDB});
}
main();