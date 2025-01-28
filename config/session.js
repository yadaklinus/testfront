"use client"
import { useRouter } from "next/router"

export function sess(){
    const router = useRouter()
    return (router)
}