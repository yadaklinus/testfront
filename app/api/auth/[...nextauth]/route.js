

import NextAuth from "next-auth"
//import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials"

import { PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'

export const authOptions = {
  secret:process.env.NEXTAUTH_SECRET,
  //adapter: MongoDBAdapter(client),
  providers: [
      // GoogleProvider({
      //     clientId: process.env.GOOGLE_CLIENT_ID,
      //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
      //   }),
        
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        id:'credentials',
        
        credentials: {
          username: { label: "email", type: "email", placeholder: "Email" },
          password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {
            const prisma = new PrismaClient()
          const email = credentials?.email
          const password = credentials?.password

          
          const user = await prisma.users.findUnique({where:{email}})
          const passwordOk = user && await bcrypt.compare(password,user.password)

          


          if(passwordOk){
           return user
           
          }
         
          return null
        }
      })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }