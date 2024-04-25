"use client"
import {RiPagesLine} from "react-icons/ri";
import React from "react";
import {ToggleGroupItem} from "@/app/components/ui/toggle-group";
import {IoIosMore} from "react-icons/io";
import {Button} from "@/app/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import {Keyboard} from "lucide-react";
import {useRouter} from "next/navigation";
import {PageListDropdown} from "@/app/components/props/page-list-dropdown";

interface PageListItemProp {
    title: string;
    uuid: string;
}

export const PageListItem = ({title, uuid}: PageListItemProp) => {
    let router = useRouter();

    const handleClick = () => {

    }

    return (
        <div
            className="flex select-none justify-between w-full transition-colors rounded-[10px] duration-300 hover:bg-[#2c2c2c]">

            <div className="w-full items-center">
                <ToggleGroupItem value={uuid} onClick={handleClick} className="hover:bg-[#2c2c2c]">

                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <RiPagesLine size={20}/>
                            <div className="max-w-[125px]">
                                <p className="truncate text-[14px]">
                                    {
                                        title
                                    }
                                </p>
                            </div>

                        </div>


                    </div>

                </ToggleGroupItem>
            </div>

            <PageListDropdown>

            </PageListDropdown>
        </div>
    )
}