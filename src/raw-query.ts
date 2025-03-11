import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();


const rawQuery= async()=>{
    // const allPosts= await prisma.$queryRaw `select * from "posts"`;
    // console.log({allPosts});

    //delete table
   const result= await prisma.$queryRaw`TRUNCATE table "posts" where "id"=1`;
   console.log({result});
}

rawQuery();