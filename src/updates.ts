import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma= new PrismaClient();

const updatesDB=async()=>{
    // const updateData= await prisma.post.update({
    //     where:{
    //         id:2
    //     },
    //     data:{
    //         authtorName:'police vai--2'
    //     }
    // })

    const updateMany= await prisma.post.updateMany({
        where:{
            title:"title--2"
        },
        data:{
            published:true
        }
    })
    console.log({updateMany});
}
updatesDB();