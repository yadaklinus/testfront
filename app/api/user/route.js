import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(){
    const prisma = new PrismaClient()
    const session = await getServerSession(authOptions)
    const email = session.user.email
   const data = await prisma.users.findUnique({
    where:{email}
   })
    return Response.json(data)
}