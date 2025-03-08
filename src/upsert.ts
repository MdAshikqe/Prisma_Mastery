import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const upsertData= async()=>{
    const createandUpdate= await prisma.post.upsert({
        where:{
            id:3
        },
        update:{
            title:"update title--3",
        },
        create:{
            title:"title--3",
            content:"content---3",
            authtorName:'ashikuzzaman-3'
        }
    })
    console.log({createandUpdate});

}
upsertData();