"use client"
import { useRouter } from "next/router"

export default function Name() {
    const router = useRouter()
    return (
        <h1 className="text-center bg-dark p-4">Data App {router.query.name}</h1>
    )
}