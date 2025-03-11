import { PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";
const prisma= new PrismaClient();

const groupBy= async()=>{
    const groupPost= await prisma.post.groupBy({
        by:['published'],
        _count:{
            title:true
        },
        having:{
            authtorId:{
                _avg:{
                    gt:0
                }
            }
        }
    })
    console.log(JSON.stringify(groupPost));
}

groupBy();