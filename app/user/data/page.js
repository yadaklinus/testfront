'use client'
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { Select, SelectItem } from "@heroui/select"
import { useEffect, useState} from "react"
import { button as buttonStyles } from "@heroui/theme";
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"





export default function Data() {
    const [network, setNetwork] = useState('')
    const [balance,setBalance] = useState('')
    const [plans, setPlans] = useState('')
    const [number,setNumber] = useState('')
    const [networkSelect, setNetworkSelect] = useState(false)
    const session = useSession()
    const {status} = session

    let userData = []

    async function getAllUsers(){
        fetch("/api/user",{
            method:"GET"
        }).then(res=>{
            res.json().then(data=>{
                userData = data
                setBalance(userData.amount)
                
            })
        })
    }


    useEffect(()=>{
        getAllUsers()
        console.log("userEmail")
       
    },[session])

    if(status === "loading"){
        return("Loading...")
    }
    if(status == 'unauthenticated'){
        return redirect('/login')
    }
    

    const DataValues = {
        Providers: [
            { label: "MTN" },
            { label: "GLO" },
            { label: "9MOBILE" },
            { label: "AIRTEL" }
        ],

    }

    const OptionsData = {
        MTN: [
            ["50mb @ ₦18 for 30days", "50"],
            ["150mb @ ₦60 for 30days", "150"],
            ["500mb @ ₦150 for 30days", "500"],
            ["1gb @ ₦280 for 30days", "1000"],
            ["2gb @ ₦555 for 30days", "2000"],
            ["3gb @ ₦835 for 30days", "3000"],
            ["5gb @ ₦1390 for 30days", "5000"],
            ["10gb @ ₦2750 for 30days", "10000"]
        ],
        GLO: [
            ["200mb @ ₦75 for 14days", "200"],
            ["500mb @ ₦150 for 30days", "500"],
            ["1gb @ ₦300 for 30days", "1000"],
            ["2gb @ ₦590 for 30days", "2000"],
            ["3gb @ ₦890 for 30days", "3000"],
            ["5gb @ ₦1500 for 30days", "5000"],
            ["10gb @ ₦2950 for 30days", "10000"]
        ],
        "9MOBILE": [
            ["200mb @ ₦75 for 14days", "200"],
            ["500mb @ ₦160 for 30days", "500"],
            ["1gb @ ₦300 for 30days", "1000"],
            ["2gb @ ₦590 for 30days", "2000"],
            ["3gb @ ₦890 for 30days", "3000"],
            ["5gb @ ₦1500 for 30days", "5000"],
            ["10gb @ ₦2950 for 30days", "10000"]
        ],
        AIRTEL: [
            ["100mb @ ₦40 for 30days", "100"],
            ["300mb @ ₦90 for 30days", "300"],
            ["500mb @ ₦150 for 30days", "500"],
            ["1gb @ ₦300 for 30days", "1000"],
            ["2gb @ ₦590 for 30days", "2000"],
            ["5gb @ ₦1500 for 30days", "5000"],
            ["10gb @ ₦2950 for 30days", "10000"]
        ]
    }

    function HandleChange(ev) {
        setNetworkSelect(true)
        setNetwork(ev.target.value)
        setPlans('')
    }

    function Plans(){
        return(
            <Select isDisabled={!networkSelect} value={plans} onChange={(e) => setPlans(e.target.value)} defaultSelectedKeys={[plans]} label="Data Plan">
                        {network && OptionsData[network]
                            ? OptionsData[network].map((pl) => (
                                <SelectItem key={pl[1]} value={pl[1]}>
                                    {pl[0]}
                                </SelectItem>
                            ))
                            : null}
                    </Select>
        )
    }

    async function handleFormSubmit(ev){
        ev.preventDefault()
        if(plans === ""){
            toast.error("Data plan Empty")
            return redirect('/user/data')
        }
        const response = await fetch('/api/data',{
            method:"POST",
            body:JSON.stringify({userNetwork:network,userPlans:plans,userNumber:number}),
            headers:{'Content-Type':'application/json'}
        })
        console.log(response)
    }


    return (
        <>
            <div className="text-center">
                
                <h1 className={"text-center mb-3 text-2xl"}>{balance}Data Purchase</h1>
                <form onSubmit={handleFormSubmit}>
                    <Select
                        onChange={HandleChange} label="Select Network"
                       
                        
                    >
                        {DataValues.Providers.map((val) => (
                            <SelectItem key={val.label}>{val.label}</SelectItem>
                        ))}
                    </Select>
                    <br />
                    <br />
                    <Plans/>
                    <br />
                    <br />
                    <Input value={number} onChange={ev=>{setNumber(ev.target.value)}} label="Phone Number" type="number"></Input>
                    <br />
                    <Button type="submit" className={buttonStyles({
                        color: "secondary",
                        radius: "full",
                        variant: "shadow",
                    })}>Purchase</Button>
                </form>
            </div>

        </>
    )
}