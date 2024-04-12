import * as React from "react"

import {ScrollArea} from "@/app/components/ui/scroll-area"
import {DropdownMenuItem} from "@/app/components/ui/dropdown-menu";
import {Label} from "@/app/components/ui/label";
import {SaveBlocks} from "@/app/lib/block/block";

interface ScrollAreaDemoProp {
    url: string;
    text: string;
}

export function ScrollAreaDemo({url, text}: ScrollAreaDemoProp) {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <Label htmlFor="terms">Last used</Label>
                <DropdownMenuItem className="text-white">Default</DropdownMenuItem>
                <Label htmlFor="terms">Color</Label>
                <DropdownMenuItem className="text-white">Default</DropdownMenuItem>
                <DropdownMenuItem className="text-gray-500">Gray</DropdownMenuItem>
                <DropdownMenuItem className="text-amber-950">Orange</DropdownMenuItem>
                <DropdownMenuItem className="text-yellow-500">Green</DropdownMenuItem>
                <DropdownMenuItem className="text-blue-700">Blue</DropdownMenuItem>
                <DropdownMenuItem className="text-purple-500">Purple</DropdownMenuItem>
                <DropdownMenuItem className="text-pink-500">Pink</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Red</DropdownMenuItem>
            </div>
        </ScrollArea>
    )
}
