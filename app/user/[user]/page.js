'use client'

import { Button } from "@heroui/button"
import { User } from "@heroui/user"
import { Link } from "@heroui/link"




export default function IndividualUser() {
    
    const name = "yadak"
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <User name={name.toUpperCase()}></User>
                <span className="text-3xl oldstyle-nums mx-5">₦2900</span>
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
    )
}
