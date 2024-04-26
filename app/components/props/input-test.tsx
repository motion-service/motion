"use client"

import React, {useContext, useState} from "react";
import {cn} from "@/app/lib/utils";
import {BlockContext} from "@/app/context/BlockProvider";
import {ProfileContext} from "@/app/context/ProfileProvider";
import {clsx} from "clsx";


interface TestProp {
    className?: string;
    block?: ITestBlock;
    selectedIndex: number;
}

export const InputTest = ({className, block, selectedIndex}: TestProp) => {
    let blockContext = useContext(BlockContext);
    let profileContext = useContext(ProfileContext);
    const [timerId, setTimerId] = useState<number | null>(null);
    const [isClicked, setIsClicked] = useState<boolean>();

    const handleMouseEnter = () => {
        // const id = window.setTimeout(() => {
        //     //TODO
        //     setTimerId(null);
        // }, 2000);
        //
        // setTimerId(id);
    };

    const handleMouseLeave = () => {
        if (timerId !== null) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        let rect = event.currentTarget.getBoundingClientRect();
        let x = rect.x;
        let y = rect.y;

        profileContext?.setNewPosition({position: {x: x, y: y}})
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        let key = event.key;

        setIsClicked(true);

        if (event.key === "a" && event.ctrlKey) {
            blockContext?.addSelectedAllCount();
        }

        switch (key) {
            case "Tab":
                event.preventDefault();

                break;

            case "Enter":
                event.preventDefault();

                break;

            case "Backspace":
                event.preventDefault();

                break;
        }
    }

    return (

        <div className={
            cn("focus:outline-none"
                // clsx({
                //     ["cursor-text"]: timerId !== null,
                //     ["cursor-pointer select-none"]: timerId === null,
                //
                // }
                , className)}

             onDoubleClick={() => {
                 console.log("test", timerId)
                 clearTimeout(timerId!);
             }}

             contentEditable
             suppressContentEditableWarning={true}
             suppressHydrationWarning={true}
             onClick={handleClick}
             onKeyDown={handleKeyDown}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onInput={(event) => {
                 let value = event.currentTarget.innerText;
                 blockContext?.sendData(selectedIndex, value);
             }}>
            {
                block?.value
            }
        </div>
    )
}
