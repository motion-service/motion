"use client"

import {useAccount} from "@/app/hook/useAccount";
import {PageList} from "@/app/components/props/page-list";
import {Editor} from "@/app/components/props/editor";
import React from "react";

export const Client = ({uuid}: ClientProp) => {
    let {data} = useAccount();

    return (
        <div className="relative h-screen overflow-hidden md:flex">
            <PageList uuid={data?.id}/>
            <Editor uuid={uuid} owner={data?.id}></Editor>
        </div>
    )
}