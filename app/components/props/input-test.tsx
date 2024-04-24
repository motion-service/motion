"use client"

import React, {useContext, useEffect, useState} from "react";
import {cn} from "@/app/lib/utils";
import {BlockContext} from "@/app/context/BlockProvider";
import {ProfileContext} from "@/app/context/ProfileProvider";

interface TestProp {
    className?: string;
}

export const InputTest = ({className}: TestProp) => {
    let blockContext = useContext(BlockContext);
    let profileContext = useContext(ProfileContext);

    return (
        <>
            <div className={cn("focus:outline-none", className)}
                 contentEditable={true}
                 suppressContentEditableWarning={true}
                 suppressHydrationWarning={true}

                 onClick={event => {
                     let rect = event.currentTarget.getBoundingClientRect();
                     let x = rect.x;
                     let y = rect.y;

                     profileContext?.setNewPosition({position: {x: x, y: y}})
                 }}

                 onKeyDown={(event) => {
                     let key = event.key;

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
                 }}

                 onMouseEnter={(event) => {

                 }}

                 onMouseLeave={(event) => {

                 }}
            >

            </div>
            {

            }
        </>
    )
}