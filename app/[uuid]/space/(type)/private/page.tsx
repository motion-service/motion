"use client"
import {useEffect, useState} from "react";
import {useAccount} from "@/app/hook/useAccount";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/components/ui/avatar";
import {CardWithForm} from "@/app/components/props/card-demo";
import {CommandMenu} from "@/app/components/props/command-demo";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/app/components/ui/command";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {




    return (
        <div>


        </div>
        // <div className="grid grid-cols-3 grid-rows-5 w-[1100px]">

        // </div>
    );
}
