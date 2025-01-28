"use client"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { FormEventHandler, useEffect, useState } from "react"
import { color } from "framer-motion"
import { button as buttonStyles } from "@heroui/theme";
import toast from "react-hot-toast"
import axios from "axios"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {Card} from "@heroui/card";
import {Skeleton} from "@heroui/skeleton";



export default function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")
    const [password, setPassword] = useState("")

    const {status} = useSession()

    if(status == "loading"){
        return (
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>
          );
    }
    
        // if(status === "authenticated"){
        //     return redirect("/user")
        // }

    let userData = []

    useEffect(()=>{
        getAllUsers()
        console.log("userEmail")
        setInterval(()=>{
            
        },1000)
    },[])

   

    async function getAllUsers(){
        fetch("/api/user",{
            method:"GET"
        }).then(res=>{
            res.json().then(data=>{
                userData = data
                console.log(userData)
            })
        })
    }

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        if(email == "" || name == "" || password == ""){
            toast.error("Input Values")
        }
        const data = userData.find(x=>{return(x.name == email)})
        
       

        const PromiseHolder = new Promise( async (resolve,reject)=>{
            const response = await fetch("/api/register",{
                method:"POST",
                body:JSON.stringify({email,name,password,phone}),
                headers:{'Content-Type': 'application/json'}
            })
            if(response.ok)
                resolve()
            else
                reject()

        })

        toast.promise(PromiseHolder,{
            loading:"Creating User...",
            success:"User Created",
            error:"Error...."
        })
        if(data){
            toast.error("emailtaken")
        }
       
    }

    // window.addEventListener('keyup',()=>{
    //     const data = userData.find(x=>{return(x.name == email)})
    //     if(data){
    //         toast.error("emailtaken")
    //     }
    // })

    

    return (
        <>
            <h1 className="text-3xl text-center">Create an Account</h1>
            <form onSubmit={handleFormSubmit} className="mt-3 text-center container gap-3 justify-center">
                <Input className="my-3" value={email} onChange={ev => { setEmail(ev.target.value) }} label="Email" type="email" required></Input>
                <Input className="my-3" value={name} onChange={ev => { setName(ev.target.value) }} label="Name" required></Input>
                <Input className="my-3" value={phone} onChange={ev => { setPhone(ev.target.value) }} label="Phone Number" type="number" required></Input>
                <Input className="my-3" value={password} onChange={ev => { setPassword(ev.target.value) }} label="Password" type="password" required></Input>
                <Button type="submit" className={buttonStyles({
                    color: "secondary",
                    radius: "full",
                    variant: "shadow",
                })} size="lg">Register</Button>
            </form>
        </>
    )
}