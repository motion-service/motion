"use client"

import {PageList} from "@/app/components/props/page-list";
import {Editor} from "@/app/components/props/editor";
import {useEffect, useState} from "react";
import {Navbar} from "@/app/components/ui/navbar";
import {CommandMenu} from "@/app/components/props/command-demo";
import {useAccount} from "@/app/hook/useAccount";
import {cookies} from "next/headers";

export const Client = ({uuid}: ClientProp) => {

    let {data} = useAccount();

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <main className="flex flex-col h-screen overflow-hidden">
            <CommandMenu/>
            <div className="flex flex-row flex-grow overflow-y-auto">
                <PageList uuid={data?.id}/>

                <div className="flex-grow flex flex-col overflow-y-auto">
                    <Navbar uuid={"userUuid"}/>
                    <Editor uuid={uuid} owner={data?.id}></Editor>
                </div>
            </div>
        </main>
    )
}