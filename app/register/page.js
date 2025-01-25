"use client"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { FormEventHandler, useState } from "react"
import { color } from "framer-motion"
import { button as buttonStyles } from "@heroui/theme";
import toast from "react-hot-toast"
import axios from "axios"

export default function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")
    const [password, setPassword] = useState("")

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        toast.success("welcome")
        if(email == "" || name == "" || password == ""){
            toast.error("Input Values")
        }

        const PromiseHolder = new Promise( async (resolve,reject)=>{
            const response = await axios.post(`http://localhost:5000/api/auth/createUser`,{email,name,password,phone},{ headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }})
            if(response.status == 201){
                setEmail('')
                setPassword('')
                setName('')
                setPhone('')
                resolve()
            }else{
                reject()
            }
        })

        toast.promise(PromiseHolder,{
            loading:"Creating User...",
            success:"User Created",
            error:"Error...."
        })
        console.log(response)
    }

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