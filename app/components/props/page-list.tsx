"use client"
import React, {useEffect, useState} from "react";
import {FaPlus} from "react-icons/fa";
import {useQuery} from "react-query";
import {MdOutlineContactPage} from "react-icons/md";
import Link from "next/link";
import {LoadPages} from "@/app/lib/page/page";


interface PageListProp {
    uuid: string;
}


export const PageList = ({uuid}: PageListProp) => {
    const [isHovered, setHovered] = useState<boolean>();
    const {data, error} = useQuery(['pages', uuid], async () => await LoadPages(uuid));

    const handleCreatePage = () => {
        fetch(`http://localhost:8090/client/page/create/${uuid}`, {
            method: 'POST'
        }).then()
    }

    return (
        <aside className="w-48 bg-[#202020] h-full text-white overflow-y-auto p-2 cursor-pointer">
            <div className="text-[11px]"
                 onMouseEnter={() => {
                     setHovered(true)
                 }}
                 onMouseLeave={() => {
                     setHovered(false)
                 }}
                // Add CSS to prevent text selection
                 style={{userSelect: 'none'}}
            >
            <span className="flex items-center justify-between" onClick={handleCreatePage}>
                하위 페이지 생성 {isHovered && <FaPlus/>}
            </span>
                <ul>
                    {
                        data?.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link href={value.metadata.url} className="flex h-fit items-center">
                                        <MdOutlineContactPage/>{value.metadata.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}