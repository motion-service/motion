"use client"

import {PageList} from "@/app/components/props/page-list";
import {Editor} from "@/app/components/props/editor";
import {useEffect, useState} from "react";
import {Navbar} from "@/app/components/ui/navbar";
import {CommandMenu} from "@/app/components/props/command-demo";
import {useAccount} from "@/app/hook/useAccount";

export const Client = ({uuid}: ClientProp) => {
    let {data, isLoading} = useAccount();

    let [test, setTest] = useState("false");
    useEffect(() => {
        if (!isLoading) {
            console.log("data", data);
        }

        console.log(test as unknown as boolean)
    }, [data]);

    return (
        <main className="flex flex-col h-screen overflow-hidden">
            <CommandMenu/>
            <div className="flex flex-row flex-grow overflow-y-auto">
                <PageList uuid={"userUuid"}/>

                <div className="flex-grow flex flex-col overflow-y-auto">
                    <Navbar uuid={"userUuid"}/>
                    <Editor uuid={uuid} owner={"userUuid"}></Editor>
                </div>
            </div>
        </main>
    )
}