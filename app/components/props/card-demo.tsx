import * as React from "react"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"

import {Label} from "@/app/components/ui/label"


export function CardWithForm() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Untitled</CardTitle>

            </CardHeader>
            <CardContent>
                <div>
                    <Label htmlFor="name">Members</Label>
                </div>
                <div>
                    <Label htmlFor="name">Guests</Label>
                </div>

            </CardContent>
            <CardFooter className="flex justify-between">
                <p>생성된 날짜</p>
                <div className="text-[12px]">
                    2024년-01월-24일
                </div>
            </CardFooter>
        </Card>
    )
}
