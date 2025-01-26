import { PrismaClient } from '@prisma/client'
import { bcrypt } from 'bcrypt'

export async function POST(req){
    const prisma = new PrismaClient()
    const {name,email,phone,password} = await req.json()
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await prisma.users.create({
        data:{name,email,phone,password:hash}
    })
    return Response.json(user)
}