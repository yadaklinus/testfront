import {signIn} from 'next-auth/react'
export async function POST(req){
    const {email,password} = await req.json()
    const response = await signIn('credentials',{email,password})
    return Response.json(response)
}