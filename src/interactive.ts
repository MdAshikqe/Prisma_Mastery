import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const interactiveTransaction= async()=>{
    const result= await prisma.$transaction(async(transactionClient)=>{
        //query 1
        const createUser= await transactionClient.user.create({
            data:{
                name:'kamal',
                email:'kamal@gmail.com'
            }
        })

        //query 2
        const updateUser=await transactionClient.user.update({
            where:{
                id:1
            },
            data:{
                name:"ashik"
            }
        })
        //query 3
        const getAllPost= await transactionClient.post.findMany({
            where:{
                published:true
            }
        })
        return {
            createUser,
            updateUser,
            getAllPost
        }
    })

    console.log({result});
}
interactiveTransaction();