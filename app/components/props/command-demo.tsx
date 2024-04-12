"use client"
import React, {useEffect, useState} from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/app/components/ui/command";

import {useAccount} from "@/app/hook/useAccount";
import {useQuery} from "react-query";
import {LoadPages} from "@/app/api/page/page";

export function CommandMenu() {

    const [open, setOpen] = React.useState(false)
    const [page, setPage] = useState<Page[]>([]);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..."/>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {page.map((value, index) => {
                        return (
                            <CommandItem>{value.metadata.title}</CommandItem>
                        )
                    })}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}