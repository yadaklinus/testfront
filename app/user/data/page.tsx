'use client'
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { Select, SelectItem } from "@heroui/select"
import { FormEvent, useState, ChangeEvent } from "react"
import { button as buttonStyles } from "@heroui/theme";
import toast from "react-hot-toast"





export default function Data() {
    const [network, setNetwork] = useState(null)
    const [plans, setPlans] = useState('')
    const [networkSelect, setNetworkSelect] = useState(false)

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

    function HandleChange(ev: ChangeEvent<HTMLSelectElement>) {
        setNetworkSelect(true)
        setNetwork(ev.target.value)
        setPlans('')
    }


    return (
        <>
            <div className="text-center">
                <h1 className={"text-center mb-3 text-2xl"}>Data Purchase</h1>
                <Select
                    onChange={HandleChange} label="Select Network"
                >
                    {DataValues.Providers.map((val) => (
                        <SelectItem key={val.label}>{val.label}</SelectItem>
                    ))}
                </Select>
                <br />
                <br />
                <Select isDisabled={!networkSelect} value={plans} onChange={(e) => setPlans(e.target.value)} defaultSelectedKeys={[plans]} label="Data Plan">
                    {network && OptionsData[network]
                        ? OptionsData[network].map((pl) => (
                            <SelectItem key={pl[1]} value={pl[1]}>
                                {pl[0]}
                            </SelectItem>
                        ))
                        : null}
                </Select>
                <br />
                <br />
                <Input label="Phone Number" type="number"></Input>
                <br />
                <Button className={buttonStyles({
                    color: "secondary",
                    radius: "full",
                    variant: "shadow",
                })}>Purchase</Button>
            </div>

        </>
    )
}