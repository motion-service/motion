"use client"
import React, {useState} from "react";
import {useQuery} from "react-query";
import {LoadPages} from "@/app/lib/page/page";
import Image from "next/image";
import {PageListItem} from "@/app/components/ui/page-list-item";
import {ToggleGroup} from "@/app/components/ui/toggle-group";
import {FaPlus} from "react-icons/fa";
import {Button} from "@/app/components/ui/button";

interface PageListProp {
    uuid: string;
}

export const PageList = ({uuid}: PageListProp) => {

    return (
        <>
            <aside
                className="select-none bg-[#202020] text-blue-100 w-64 absolute left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

                <div className="px-2 py-2 text-white text-[14px] flex items-center space-x-2">
                    <Image src={"https://avatars.githubusercontent.com/u/11320397"} alt={""} width={24} height={24}
                           className="rounded-[5px]"/>
                    <span>
                         Israel Becker86's Motion
                    </span>
                </div>
                <div className="m-2">
                    <div className="flex items-center w-full justify-between">
                        <div className="text-[12px]">
                            Private
                        </div>

                        <Button variant="ghost" size={"sm"}>
                            <FaPlus size={10}/>
                        </Button>
                    </div>
                    <ToggleGroup type="single" defaultValue={uuid}>
                        <PageListItem title={"Untitlesaffasasfdasasff"} uuid={uuid}></PageListItem>
                        <PageListItem title={"asdf"} uuid={uuid}></PageListItem>
                    </ToggleGroup>
                </div>
            </aside>
        </>
    )
}