import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"


export async function POST(req){
    const prisma = new PrismaClient()
    const session = await getServerSession(authOptions)

    const {userNetwork,userPlans,userNumber} = await req.json()
       
            let sender = await prisma.users.findUnique({
                where:{
                    email:session.user.email
                }
            })
            let dataBondule = userPlans
            let network = userNetwork
            let amount_to_send
            let network_dis
            let networkDit
            let number = userNumber
        
            if(network == "MTN"){
                networkDit = "01"
                    switch (dataBondule) {
                        case '50':
                            amount_to_send = 18
                            break;
                        case '150':
                            amount_to_send = 60
                            break;
                        case '500':
                            amount_to_send = 160
                            break;
                        case '1000':
                            amount_to_send = 280
                            break;
                        case '2000':
                            amount_to_send = 550
                            break;
                        case '3000':
                            amount_to_send = 830
                            break;
                        case '5000':
                            amount_to_send = 1390
                            break;
                        case '10000':
                            amount_to_send = 2750
                            break;
                    }
            }else if(network == "GLO"){
                networkDit = "02"
                switch (dataBondule) {
                    case '200':
                        amount_to_send = 75
                        break;
                    case '500':
                        amount_to_send = 150
                        break;
                    case '1000':
                        amount_to_send = 300
                        break;
                    case '2000':
                        amount_to_send = 590
                        break;
                    case '3000':
                        amount_to_send = 890
                        break;
                    case '5000':
                        amount_to_send = 1500
                        break;
                    case '10000':
                        amount_to_send = 2950
                        break;
                }
            }else if(network == "ETISALAT"){
                networkDit = "03"
                switch (dataBondule) {
                    case '500':
                        amount_to_send = 160
                        break;
                    case '50':
                        amount_to_send = 20
                        break;
                    case '1000':
                        amount_to_send = 270
                        break;
                    case '2000':
                        amount_to_send = 550
                        break;
                    case '5000':
                        amount_to_send = 1300
                        break;
                }
            }else if(network == "AIRTEL"){
                networkDit = "04"
                switch (dataBondule) {
                    case '100':
                        amount_to_send = 40
                        break;
                    case '300':
                        amount_to_send = 90
                        break;
                    case '500':
                        amount_to_send = 150
                        break;
                    case '1000':
                        amount_to_send = 300
                        break;
                    case '2000':
                        amount_to_send = 590
                        break;
                    case '5000':
                        amount_to_send = 1500
                        break;
                    case '10000':
                        amount_to_send = 2950
                        break;
                }
            }
            
            
                //await debit(sender,amount_to_send)
                //res.send( networkDit+" : "+" : "+number+" : "+dataBondule+" : "+amount_to_send)
                // await debit(sender,amount_to_send)
                
                
               
                    const trans = await prisma.purchase.create({
                        data:{
                            usersId:sender.id,
                            number:number,
                            network:network,
                            orderId:"hi",
                            boundle:dataBondule,
                            amount:String(amount_to_send),
                            type:"data"
                        }
                    })
                    //res.redirect("/user/dashboard")
                    console.log('send')
                    
               
                //req.flash('message','low Balance')
                
            
                return Response.json(session)
   
    
}