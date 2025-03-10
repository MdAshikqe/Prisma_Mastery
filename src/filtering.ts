import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();


const filtering= async()=>{
    const andfiltering= await prisma.post.findMany({
        where:{
            AND:[
                {
                    title:{
                        contains:"js"
                    }
                },
                {
                    published:true
                }
            ]
        }
    })
    const orfiltering= await prisma.post.findMany({
        where:{
            OR:[
                {
                    title:{
                        contains:"js"
                    }
                },
                {
                    published:true
                }
            ]
        }
    })


    const notFiltering= await prisma.post.findMany({
        where:{
            NOT:{
                title:{
                    contains:"js"
                }
            }
        }
    })

    const startWithFiltering= await prisma.user.findMany({
        where:{
            email:{
                startsWith:"ashik2"  //endWith,contains,eqauls
            }
        }
    })

    const userNameArray= ["Alice 2","Alice"]

    const userNameByArray= await prisma.user.findMany({
        where:{
            name:{
                in:userNameArray
            }
        }
    })


    const indepData= await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:{
                include:{
                    postCategories:{
                        include:{
                            catagory:true
                        }
                    }
                }
            }
        }
    })



    console.log(JSON.stringify(indepData, null, 2));

}

filtering();