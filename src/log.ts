import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        }
    ]
});
prisma.$on("query", e=>{
    console.log(e.duration);
    console.log(e.timestamp);
    console.log(e.query);
})

const result= async()=>{
    const user= await prisma.user.findMany({});
    // console.log(user);
}

result();