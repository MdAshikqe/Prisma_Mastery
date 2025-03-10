import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const relationshipQueries=async()=>{
    //fluied filtaring
    const user= await prisma.user.findUnique({
        where:{
            id:1
        },
        // include:{
        //     posts:true
        // }
    }).posts();

    //relational filter
    const publishPostUser= await prisma.user.findMany({
        include:{
            posts:{
                where:{
                    published:true
                }
            }
        }
    })
    // console.dir(publishPostUser,{dept:null});
    // console.log({publishPostUser});
    console.log(JSON.stringify(publishPostUser, null, 2));
}

relationshipQueries();