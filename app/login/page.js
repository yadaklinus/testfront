"use client"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { useState } from "react"
import { button as buttonStyles } from "@heroui/theme";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleFormSubmit(ev){
        ev.preventDefault()
        const response = await axios.post("/api/login",{email,password},{headers:{
            "Content-Type":"application/json"
        }})
        toast.success("welcome")
        console.log(response)
    }
    

    return (
        <>
            <h1 className="text-3xl text-center">Welcome Back</h1>
            <form onSubmit={handleFormSubmit} className="mt-3 text-center container gap-3 justify-center">
                <Input className="my-3" value={email} onChange={ev => { setEmail(ev.target.value) }} label="Email" type="email"></Input>
                <Input className="my-3" value={password} onChange={ev => { setPassword(ev.target.value) }} label="Password" type="password"></Input>
                <Button className={buttonStyles({
                    color: "secondary",
                    radius: "full",
                    variant: "shadow",
                })} size="lg">Login</Button>
            </form>
        </>
    )
}