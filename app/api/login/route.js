import {signIn} from 'next-auth/react'
export async function POST(req){
    const {email,password} = await req.json()
    const callbackUrl=process.env.NEXTAUTH_URL
    const response = await signIn('credentials',{email,password,callbackUrl:"/user"})
    return Response.json(response)
}