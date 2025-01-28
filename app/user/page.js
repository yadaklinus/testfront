'use client'

import { Button } from "@heroui/button"
import { User } from "@heroui/user"
import { Link } from "@heroui/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"




export default function IndividualUser() {
    
    const [amount,setAmount] = useState('')
    const [name,setName] = useState('')
    const session = useSession()
    const {status,data} = session
    let userData
    let transaction

    useEffect(()=>{
        getAllUsers()
        console.log("userEmail")
    },[session])

   

    async function getAllUsers(){
        fetch("/api/user",{
            method:"GET"
        }).then(res=>{
            res.json().then(data=>{
                userData = data
                setAmount(userData.amount)
                setName(userData.name)
                
            })
        })
        // fetch('/api/transaction',{method:"GET"}).then(res=>{
        //     res.json().then(data=>{
        //         transaction = data
        //         console.log(transaction)
        //     })
        // })
    }


    if(status === "loading"){
        return("loading...")
    }
    if(status === "authenticated"){
        

     
    }

    if(status === "unauthenticated"){
        return redirect('/login')
    }
    
    
    
    return (
       <>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <User name={name}></User>
                <span className="text-3xl oldstyle-nums mx-5">₦{amount}</span>
            </div>
            <div className="text-center my-6 gap-4">
                <Link href="/user/data"><Button size="lg" className="mx-3">Data</Button></Link>
                <Link href="/user/airtime"><Button size="lg" className="mx-3">Airtime</Button></Link>
            </div>
            <h1 className="text-center my-4 text-2xl">Transaction Details</h1>
            <table className="table-auto w-full border-collapse text-center border">
                <tbody className="place-content-center gap-3">
                    <tr className="">
                        <td className="border">MTN</td>
                        <td className="border">1GB</td>
                        <td className="border px-2">08030646154</td>
                    </tr>
                    <tr className="">
                        <td className="border">GLO</td>
                        <td className="border">₦500</td>
                        <td className="border px-2">08030646154</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div>
           
        </div>
        </>
    )
}
