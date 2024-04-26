"use client"

import {useAccount} from "@/app/hook/useAccount";
import {PageList} from "@/app/components/props/page-list";
import {Editor} from "@/app/components/props/editor";
import React, {useEffect} from "react";
import {socket, SocketContext} from "@/app/context/SocketProvider";
import ProfileProvider from "@/app/context/ProfileProvider";
import BlockProvider from "@/app/context/BlockProvider";

export const Client = () => {
    let {data} = useAccount();

    return (
        <div className="relative h-screen overflow-hidden md:flex">
            <SocketContext.Provider value={socket}>
                <PageList uuid={data?.id}/>

                <ProfileProvider>
                    <BlockProvider>
                        <Editor/>
                    </BlockProvider>
                </ProfileProvider>
            </SocketContext.Provider>
        </div>
    )
}
