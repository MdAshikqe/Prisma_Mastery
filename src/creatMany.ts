import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const main=async()=>{
    const createMany= await prisma.post.createMany({
        data:[
            {
                title:"title--1",
                content:"content---1",
                authtorName:'ashikuzzaman-1'
            },
            {
                title:"title--2",
                content:"content---2",
                authtorName:'ashikuzzaman-2'
            },
            {
                title:"title--3",
                content:"content---3",
                authtorName:'ashikuzzaman-3'
            }
        ]
        
    })
    console.log(createMany);
}
main();