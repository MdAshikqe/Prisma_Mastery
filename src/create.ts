import { PrismaClient, UserRole } from "@prisma/client";
const prisma= new PrismaClient();

const create=async()=>{
//    const user= await prisma.user.create({
//     data:{
//         name:"Alice 2",
//         email:"ashik2@gmail.com",
//         role:UserRole.user, 
//     }
//    })

//    console.log({user});
// const createprofile= await prisma.profile.create({
//     data:{
//         bio:"I like turtles",
//         userId:1
//     }
// })
// console.log({createprofile});

    // const creatCatagory= await prisma.catagory.create({
    //     data:{
    //         name:"Next.js",

    //     }
    // })
    const createPost= await prisma.post.create({
        data:{
            title:"wb deploment in js",
            content:"Next.js is a react framework",
            authtorId:2,
            published:true,
            postCategories:{
                create:[
                    {
                        catagoryId:1

                    },
                    {
                        catagoryId:4
                    }
                ]
            }
        },
        include:{
            postCategories:true
        }

    })
   console.log({createPost});
}
create();