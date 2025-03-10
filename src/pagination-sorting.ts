import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const paginationSorting=async ()=>{
    // offset pagination
    const offsetData= await prisma.post.findMany({
        skip:2,
        take:2,

    })
    //cursor-base pagination
    const cursorData= await prisma.post.findMany({
        skip:2,
        take:2,
        cursor:{
            id:10
        }
    })

    //sorting
    const sorting= await prisma.post.findMany({
        orderBy:{
            title:'desc'
        },
        where:{
            title:"title--2"
        }
    })
    console.log({sorting});

}
paginationSorting();