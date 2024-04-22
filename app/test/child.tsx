"use client"
import {useContext, useEffect, useState} from "react";
import {SocketContext} from "@/app/context/socket";

interface GrandChildProp {
    uuid: string;
}

interface BlockTest {
    value: string;
}

export const GrandChild = ({uuid}: GrandChildProp) => {
    const socket = useContext(SocketContext);
    const [blocks, setBlocks] = useState<BlockTest[]>([]);

    useEffect(() => {

        socket.emit("connection", {id: uuid, test_blocks: blocks});

    });

    return (
        blocks.length == 0 && (
            <div contentEditable={true} suppressHydrationWarning={true}
                 onChange={(event) => {
                     console.log(event.currentTarget)
                 }}
                 onKeyDown={(event) => {

                 }}>

            </div>
        )

    );
};
