"use client"

import "@/app/components/props/editor/style.css"
import React, {useState} from "react";
import Image from "next/image";
import {InputTest} from "@/app/components/props/input-test";
import {Profile} from "@/app/components/profile";

interface EditorProp {
    uuid: string;
    owner: string;
}

export const Editor: React.FC<EditorProp> = ({uuid, owner}: EditorProp) => {
    // const {data, error} = useQuery(['pages', uuid], async () => await LoadPages(uuid));
    const [position, setPosition] = useState<Position>();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        let viewportOffset = event.currentTarget.getBoundingClientRect();

        let top = viewportOffset.top;
        let left = viewportOffset.left;

        setPosition({
            x: left,
            y: top
        })
    }

    return (
        <div className="">
            <div className="grid grid-cols-[250px_auto] grid-rows-[50px_auto] gap-1 w-full overflow-hidden">
                <span className="col-start-1">
                    {
                        position &&
                        <Profile position={position}/>
                    }
                </span>
                <span className="">
                <h1 className="font-bold text-4xl">
                    Untitled
                </h1>
                </span>
                <div className="col-start-2 w-fit">
                    <InputTest handleClick={handleClick}></InputTest>
                </div>
            </div>
        </div>
    );
};
