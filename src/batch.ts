import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

const batch= async()=>{

    const createUser=  prisma.user.create({
        data:{
            name:'akther vai',
            email:'aktherVai@gamil.com'
        }
    })
 

    const updateUser= prisma.user.update({
        where:{
            id:3
        },
        data:{
            age:25
        }
    })

    const [userData,updateUserData]= await prisma.$transaction([
        createUser,
        updateUser
    ])

    console.log({userData,updateUserData});




}
batch();